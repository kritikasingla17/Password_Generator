import { useState } from "react";

const useGeneratePassword = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const generatePassword = (passwordLength, checkboxData) => {
        let charSet = "";
        let password = "";

        const selectedOptions = checkboxData.filter((checkbox) => checkbox.checked);

        if (selectedOptions.length === 0) {
            setError("Select atleast one option.");
            setPassword("")
            return;
        }

        selectedOptions.forEach((checkbox) => {
            switch (checkbox.title) {
                case "Include Uppercase Letters":
                    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case "Include Lowercase Letters":
                    charSet += 'abcdefghijklmnopqrstuvwxyz'
                    break;
                case "Include Numbers":
                    charSet += '0123456789'
                    break;
                case "Include Symbols":
                    charSet += '!@#$%&*_-?./()[]{}\|'
                    break;
                default:
                    break;
            }
        });

        for (let i = 0; i < passwordLength; i++) {
            const index = Math.floor(Math.random() * charSet.length);
            password += charSet[index]
        }

        setPassword(password);
        setError("")
    }

    return { password, error, generatePassword }

}
export default useGeneratePassword