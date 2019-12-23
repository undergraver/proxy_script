
// special-proxy
var specialProxyForNetwork1 = "PROXY 192.192.192.192:3128";
var specialProxyForNetwork2 = "PROXY 168.168.168.168:3128";

var special_domains = new Array (
	"172.172.172.172",
	".ends.like.this.com",
	"www.google.com"
);

var network1Ips = new Array (
	"10.10.10.0/255.255.255.0",
	"11.11.11.0/255.255.255.0"
);

var network2Ips = new Array (
	"13.13.13.0/255.255.255.0",
	"12.12.12.0/255.255.255.0"
);

function isSpecialDomain(url, host) {
    var i;
	for (i = 0; i < special_domains.length; i++) {
		regex = new RegExp(special_domains[i].replace(/\./g,"\\.") + "$", "i");
		if (regex.test(host) == true ) {
			//alert("Using Special Proxy");
			return true;
		}
	}
	return false;
}

function isInOneOfTheNetworks(networkArray) {
	var networksCounter;
    
	var hostcounter;
	var hostIPs = new Array();
	var network_and_netmask;
	
	// do we have the ex-functions?
	if (typeof(myIpAddressEx) == "function") {
		// alert("Extended functions available");
		allIPs = myIpAddressEx();
		hostIPs = allIPs.split(";");
	} else {
		// alert("Extended functions not available");
		hostIPs.push(myIpAddress());
	}
	
	// checking all known IPs
	for (hostcounter = 0; hostcounter < hostIPs.length; hostcounter++) {
		for (networksCounter = 0; networksCounter < networkArray.length; networksCounter++) {
			// alert("Checking " + hostIPs[hostcounter] + " against " + networkArray[networksCounter]);
			network_and_netmask = networkArray[networksCounter].split("/");
			if (isInNet(hostIPs[hostcounter], network_and_netmask[0], network_and_netmask[1])) {
				// alert("My IP is in network");
				return true;
			}
		}
	}
	
	// alert("My IP is not in the specified network");
	return false;
}


function FindProxyForURL(url, host)
{
	// If user requests plain hostname send direct
	if (isPlainHostName(host))
		return "DIRECT";
        
    var specialDomain = isSpecialDomain(url,host);
    if (specialDomain) {
        
        if(isInOneOfTheNetworks(network1Ips)) {
            return specialProxyForNetwork1;
        }
        
        if(isInOneOfTheNetworks(network2Ips)) {
            return specialProxyForNetwork2;
        }
        
    }

    // direct by default
	return "DIRECT";
}
