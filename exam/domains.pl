domain("amazon.com", "com").
domain("google.com", "com").

domain("wikipedia.org", "org").
domain("thepiratebay.org", "org").

domain("stanford.edu", "edu").
domain("mit.edu", "edu").

get_domain_zone(DomainName) :-
    domain(DomainName, DomainZone),
    write(DomainZone).