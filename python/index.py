import os
import hmac
import hashlib

from flask import Flask, request, abort

app = Flask(__name__)

# You can find your Webhook's Secret in the Dashboard at https://app.usebutton.com/webhooks on the page for a specific Webhook.
WEBHOOK_SECRET = 'YOUR_WEBHOOK_SECRET' # Do not publicly expose this

@app.route('/webhook', methods=['POST'])
def webhook():
    computed_signature = signature(request.data)
    sent_signature = request.headers.get('X-Button-Signature').encode('utf8')

    if not hmac.compare_digest(computed_signature, sent_signature):
        abort(403)

    # Here is the webhook data
    data = request.json['data']

    return 'ok', 200

def signature(request_body):
    return hmac.new(WEBHOOK_SECRET, request_body, hashlib.sha256).hexdigest()

if __name__ == "__main__":
    app.run()
