export const validation = data => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = "Username required"
    } else {
        delete errors.name
    }

    if(!data.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "Password is required"
    } else if(data.password.length < 6) {
        errors.password = "Password must be at least 6 charachter"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = "Confirm the password"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password doesn't match"
    } else {
        delete errors.confirmPassword
    }

    if(data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our regulations"
    }

    return errors;
}