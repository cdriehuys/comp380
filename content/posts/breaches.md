---
title: Data Breaches
menu: main
---

> A data breach is a security violation in which sensitive, protected or
> confidential data is copied, transmitted, viewed, stolen or used by an
> individual unauthorized to do so.[^data-breach-definition]

In our increasingly digital culture, data breaches have gone from being a rarity
to a weekly or even daily occurrence. There are a number of factors contributing
to this increase. As a company, analytics are becoming increasingly important
for understanding how to become more profitable, and the best way to improve
analytics is through gathering more data. For consumers, working digitally is
becoming the norm. Whether you are browsing social media, scheduling a doctor's
appointment, or shopping, these activities are now performed almost exclusively
online. The result of these two factors is a larger amount of data entering the
web, and a larger amount of personally identifying information being stored.

## Breach Timeline

Using data from [Have I Been Pwned](https://haveibeenpwned.com), we have
created a timeline of recorded data breaches. Note that the vast majority of
breaches affected tens of thousands, if not millions of accounts.

{{<breach-timeline>}}

## How Breaches Happen

As more data is sent and collected on the internet, the attack surface for this
data becomes larger and gaining access becomes more lucrative. Data breaches
occur in one of two ways.

The first method is through an actual attack, or "hack". This is a method in
which malicious actors decide they want access to a party's data, and actively
attempt to gain access using vulnerabilities in the data owner's security
measures. Attacks are often performed so that the stolen data can be sold.
[^myspace] As we transport higher quantities of identifying information over the
internet, the profitability of stealing that data also increases, since the
information can be used to steal identities or hack into other profitable
locations such as bank accounts.

The second method is through poor security, a method that has become more
prevalent in recent years. The root cause of these breaches is an unsecured
resource that contains sensitive information. This often occurs when a company
is eager to gather more data for analytics, and security takes a back seat. The
result is cases like an Elasticsearch instance left publicly exposed with 22
million records.[^elasticsearch] Even with no attackers trying to break in, the
increased rates at which data is sent and collected are resulting in leaks of
personally identifying information.


[^data-breach-definition]:
    United States Department of Health and Human Services, Administration for
    Children and Families.
    [Information Memorandum](https://www.acf.hhs.gov/sites/default/files/cb/im1504.pdf)

[^elasticsearch]:
    A Florida-based company specializing in job search aggregation left an
    [Elasticsearch instance with over 44 million records exposed to the public](https://blog.hacken.io/how-sensitive-is-your-non-sensitive-data).
    
[^myspace]:
    In 2008, [360 million MySpace accounts](https://motherboard.vice.com/en_us/article/pgkk8v/427-million-myspace-passwords-emails-data-breach)
    were stolen and subsequently put up for sale.
