"use strict";
(function()
{
    let protected_routes = [
        "contact-list"
    ];

    // If the active route is inside the protected routes array (indexOf finds it)
    if(protected_routes.indexOf(router.ActiveLink) > -1)
    {
        // check if user is logged in
        if(!sessionStorage.getItem("user"))
        {
            // redirect to login page
            location.href = "/login";
        }
    }
    
})();