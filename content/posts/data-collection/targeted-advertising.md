---
title: Targeted Advertising
menu:
  main:
    parent: Data Collection
---

One way companies use the data they collect on consumers is to deliver
advertisements tailored to a specific user's interests. By collecting data on
other pages the user has visited or products the user has purchased, the company
can deliver the advertisement most likely to produce a sale.

## Methods

There are various methods that companies can employ to track user behavior.

### On-Platform Tracking

Perhaps the most straightforward and understandable forms of tracking is the
collection of user data when the user is actually using the company's platform.
For example, when visiting Amazon, they are most likely logging each page you
visit to build a profile of your interests.

This form of tracking is also the most transparent since the policies the
company uses are laid out in their (sometimes cryptic) Privacy Policy or Terms
of Service. On the other hand, the only way to opt out of this tracking is often
to not use the platform.  

### Tracking Pixels

A tracking pixel is a 1x1 image (ie it takes up 1 pixel, hence the name) which
is used to track users. When the user views a page with one of these images in
it, the browser sends a request to the server hosting the image. The host of the
tracking pixel can then see that a request was made. There is a wide variety of
information that tracking pixels can collect.[^tracking-pixel-data] A few
examples of the types of information available are:

* Operating system used (gives information on the use of mobile devices)
* Type of website or email used, for example on mobile or desktop
* Type of client used, for example a browser or mail program.
* Client’s screen resolution
* Time the email was read or website was visited
* Activities on the website during a session (when using multiple tracking pixels)
* IP address (gives information on the Internet Service Provider and location)

The advantage of tracking pixels is that they are very difficult to block
without disabling images entirely. As a result,
[many have questioned the privacy implications][tracking-pixel-privacy] of their
use. The particularly concerning aspect of these images is that they are often
used without the consent of the user. Because they work by detecting when an
image is loaded, they can be used in a variety of applications, from web pages
to emails.

The simplicity of being an image is also the downside of tracking pixels. There
is not a lot of information that can be gathered with a simple image without
employing more complicated techniques. As a result, tracking pixels, although
still used, are not the primary source of collected data.

## Using the Data

Once a company has collected this data, they can analyze it to tailor the
responses they deliver to a user. For example, if they have tracking pixels on
a travel site and see a user is planning a trip to Iceland, the company can
start serving ads to the user marketing cold weather gear. The result is
advertisers being able to serve the advertisement that has the highest potential
profitability.

The idea of businesses collecting data to improve their bottom line is not a
problem in and of itself. However when companies collect data without the
consent of the user and then lose that data, users are punished. And in the case
of users tracked without their consent, we can see extreme cases of a person's
identity being stolen in a data breach for a company that the person didn't
even use.


[tracking-pixel-privacy]: https://www.wired.com/story/how-email-open-tracking-quietly-took-over-the-web/

[^tracking-pixel-data]:
    Examples provided by [ryte.com](https://en.ryte.com/wiki/Tracking_Pixel), a
    digital marketing agency.
