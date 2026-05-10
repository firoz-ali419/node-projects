

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something Went wrong",
        errors = [],
        stack = ""

    ) {
        super(message)

        this.statusCode = statusCode,
            this.data = null,
            this.message = message
            this.errors = errors
        if (stack) {
            this.stack = stack

        } else {
            Error.capturedStackTrace(this, this.constructor)
        }

    }

}