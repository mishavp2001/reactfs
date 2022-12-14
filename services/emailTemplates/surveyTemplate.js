const keys = require("../../config/keys")

module.exports = (survey) => {
    return `
        <html>
        <body>
            <div style="text-align: center">
            <h3>I'd like your input</h3>
            <p>Please answer the following question:</p>
            <h3>${survey.body}</h3>
            <div>
                <a href="${keys.redirectDomain}/api/survey/thanks">Yes</a>
            </div>
            <div>
                <a href="${keys.redirectDomain}/api/survey/thanks">No</a>
            </div>
            </div>
        </body>
        </html>
    `
}