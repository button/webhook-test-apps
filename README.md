# Webhook Test Apps

Each folder contains a functioning test app for Node.js, Ruby, and Python. Each uses their respective popular web frameworks, [Express](https://expressjs.com/), [Sinatra](http://www.sinatrarb.com/), and [Flask](http://flask.pocoo.org/). To run, do the following:

1. Open up your terminal and navigate to the language you're testing:
  - For Node.js, `cd node`
  - For Ruby, `cd ruby`
  - For Python, `cd python`
2. Install dependencies:
  - For Node.js, `npm install`
  - For Ruby, `bundle install`
3. Open up either the `index.js`, `index.rb`, or `index.py` and replace your `'WEBHOOK_SECRET'` with your webhook secret found in your [webhook dashboard](https://app.usebutton.com/webhooks).
4. Run the app:
  - For Node.js, `node index.js`
  - For Ruby, `ruby index.rb`
  - For Python, `python python.py`
5. Open up a local tunnel using [ngrok](https://ngrok.com/) to the local port specified after the previous step. Typically, for Node.js it will be port `5000`, for Ruby it will be port `4567`, and for Python it will be port `5000`.
6. Set the URL given by ngrok on the [webhook dashboard](https://app.usebutton.com/webhooks).
7. Send a test webhook using by selecting the `Ping` button on the [webhook dashboard](https://app.usebutton.com/webhooks).
