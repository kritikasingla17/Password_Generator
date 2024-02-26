import React from 'react'

const PasswordStrength = ({password=""}) => {
    const getPasswordStrength=()=>{
        const passwordLength=password.length;
        if(passwordLength<1)    return ""
        else if(passwordLength<4) return "Very Poor"
        else if(passwordLength<8) return "Poor"
        else if(passwordLength<12) return "Medium"
        else if(passwordLength<16) return "Strong";
        else return "Very Strong"
    }
    const passwordStrength= getPasswordStrength();
    if (!passwordStrength) return <React.Fragment />;

    return (
        <div style={{display:"flex", justifyContent:"space-between", paddingBottom:"12px"}}>
            <label>Strength</label>
            <label style={{fontWeight: 700}}>{passwordStrength}</label>
        </div>
    )
}

export default PasswordStrength
