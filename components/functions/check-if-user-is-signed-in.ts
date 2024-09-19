import { auth } from "@clerk/nextjs/server"


const checkIfUserIsSignedIn = () => {
    const { userId } = auth()

    if (!userId) {
        return false
    }
    return true
}

export default checkIfUserIsSignedIn