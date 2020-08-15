export default {
    "GET|/api/log": {
        "data|1-50":[{
            "level|1": ["info","debug","error"],
            "node": "console:@url(http)",
            "time": "@date",
            "message": "@cparagraph"
        }],
        "error": null
    }
}