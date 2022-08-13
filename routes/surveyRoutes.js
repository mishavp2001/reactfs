const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredit')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')


const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/survey/thanks', (req, resp) => {
        resp.send('Thank you for voting!');
    })

    app.post('/api/survey', requireLogin, requireCredits, async (req, resp) => {
        const { title, subject, body, recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));

        //Send email
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            resp.send(user);
        } catch(err) {
            resp.status(422).send(err);
        }
    });
    
}

