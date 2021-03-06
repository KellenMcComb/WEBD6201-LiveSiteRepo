(function(core){

    class User
    {
        // constructor
        constructor(displayName = "", emailAddress = "", username ="", password = "")
        {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // overridden methods
        toString()
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}`;
        }

        // utility methods
        toJSON()
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        fromJSON(data)
        {
            // Data must be formatted exactly right
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize()
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }

            console.error("One or more properties of the User Object are missing or invalid");
            return null;
        }
    
        deserialize(data) // assume that data = CSV
        {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }



    }

    core.User = User;

})(core || (core={}))