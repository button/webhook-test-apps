require 'sinatra'

require 'openssl'
require 'json'

WEBHOOK_SECRET = 'YOUR_WEBHOOK_SECRET'

post '/webhook' do
  request_body = request.body.read
  raise 'Invalid Webhook Signature' if request.env["HTTP_X_BUTTON_SIGNATURE"] != signature(request_body)

  json = JSON.parse(request_body)

  # Here is the webhook data
  data = json['data']

  status 200
end

def signature request_body
  OpenSSL::HMAC.hexdigest(
    OpenSSL::Digest.new('sha256'),
    WEBHOOK_SECRET,
    request_body
  )
end
