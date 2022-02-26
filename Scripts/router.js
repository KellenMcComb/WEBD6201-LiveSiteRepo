(function(core){

    class Router
    {
        // public properties (getters & setters)
        get ActiveLink()
        {
            return this.m_activeLink;
        }

        set ActiveLink(link)
        {
            this.m_activeLink = link;
        }
        
        // constructor

        /**
         * Creates an instance of Router
         * 
         * @constructor
         */
        constructor()
        {
            this.ActiveLink = "";
        }

        // public methods

        /**
         * Adds a new route to the Routing table
         * 
         * @param {string} route 
         */
        Add(route)
        {
            this.m_routingTable.push(route)
        }

        /**
         * This replaces the current routing table with a new one
         * Routes should begin with '/' character
         * 
         * @param {string[]} routingTable
         */
        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        /**
         * Finds the index of the route in the routing table, otherwise
         * it returns -1 if the route is not found
         * 
         * @param {string} route 
         * @returns 
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * Removes a route from the routing table, returns true if
         * the route was successfully removed, otherwise returns false
         * 
         * @param {string} route
         * @returns {boolean}
         */
        Remove(route)
        {
            // if route is found (greater than not found [-1])
            if(this.Find(route) > -1)
            {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        // overridden methods

        /**
         * override of toString() method that returns the entire routing 
         * table as a string
         * 
         * @override
         * @returns {string}
         */
        toString()
        {
            return this.m_routingTable.toString();
        }
    }

    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"
]);

let route = location.pathname; // alias for location.pathname

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else
{
    router.ActiveLink = "404"; // file not found
}