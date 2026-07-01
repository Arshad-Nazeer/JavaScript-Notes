function generatePassword(pwdlen, includelowercase, includeuppercase, includenumbers, includesymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()-_=+"

    let allowedchars = "";
    let pwd = "";

    allowedchars += includelowercase ? lowercasechars: "";
    allowedchars += includeuppercase ? uppercasechars: "";
    allowedchars += includenumbers ? numberchars: "";
    allowedchars += includesymbols ? symbolchars: "";

    if(pwdlen<=0) return `passowrd length must be atleast 1`;
    if(allowedchars.length === 0) return `atlest 1 set of characteres need to be selected`;

    for(let i=0; i<pwdlen; i++){
        const randomIndex = Math.floor(Math.random()*allowedchars.length);
        pwd+=allowedchars[randomIndex];
    }

    return pwd;
}

document.getElementById("button").onclick = function(){
    const pwdlen = Number(document.getElementById("length").value);
    const includelowercase = document.getElementById("includelowercase").checked;
    const includeuppercase = document.getElementById("includeuppercase").checked;
    const includenumbers = document.getElementById("includenumbers").checked;
    const includesymbols = document.getElementById("includesymbols").checked;


    const pwd = generatePassword(pwdlen, includelowercase, includeuppercase, includenumbers, includesymbols);

    document.getElementById('result').textContent = pwd;


    console.log(`Generated Password: ${pwd}`);
}