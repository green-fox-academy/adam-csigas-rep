
/* 
Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long - form, stick - figure - illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention.When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing. */

'use strict';
export { };

class blogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorNameinc: string, titleinc: string, textinc: string, publicationDateinc: string) {
        this.authorName = authorNameinc;
        this.title = titleinc;
        this.text = textinc;
        this.publicationDate = publicationDateinc;
    }
}

let BlogPost01: blogPost = new blogPost('Jon Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let BlogPost02: blogPost = new blogPost('Tim Urban', 'Wait but why', 'A popular long - form, stick - figure - illustrated blog about almost everything.', '2000.05.04.');
let BlogPost03: blogPost = new blogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention.When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2000.05.04.');

console.log(BlogPost01);
console.log(BlogPost02);
console.log(BlogPost03);