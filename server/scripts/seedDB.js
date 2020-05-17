const mongoose = require('mongoose')
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/bookSearch'
)
const bookSeed = [
    {
        title: 'Wendy\'s Got the Heat',
        author: 'Wendy Williams with Karen Hunter',
        description:
            'Whether she\'s hosting her nationally syndicated television talk show The Wendy Williams Show or doing commentary for the VH1 Fashion Awards, her fans know that Wendy\'s Got the Heat.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51lsNarVLrL._SX318_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Wendys-Got-Heat-Wendy-Williams/dp/0743470222https://www.amazon.com/Wendys-Got-Heat-Wendy-Williams/dp/0743470222',
    },
    {
        title: 'True Love',
        author: 'Jennifer Lopez',
        description:
            'True Love is an honest and revealing personal diary with hard-won lessons and heartfelt recollections and an empowering story of self-reflection, rediscovery, and resilience.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51peDA3gc3L._SX328_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/True-Love-Jennifer-Lopez/dp/0451468686/ref=pd_sbs_14_1/147-6340205-5836438?_encoding=UTF8&pd_rd_i=0451468686&pd_rd_r=661557f5-17f8-4a2b-b60f-13b0b0c804de&pd_rd_w=K891W&pd_rd_wg=dnWD8&pf_rd_p=12b8d3e2-e203-4b23-a8bc-68a7d2806477&pf_rd_r=3V257V38CTFK1A96T5JA&psc=1&refRID=3V257V38CTFK1A96T5JA',
    },
    {
        title: 'Handbook for an Unpredictable Life: How I Survived Sister Renata and My Crazy Mother, and Still Came Out Smiling (with Great Hair)',
        author: 'Rosie Perez',
        description:
            'Oscar-nominated actress and star of the new musical drama Rise, Rosie Perez’s never-before-told story of surviving a harrowing childhood and of how she found success—both in and out of the Hollywood limelight.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51k5w2k74kL._SX322_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Handbook-Unpredictable-Life-Survived-Smiling/dp/0307952401/ref=sr_1_1?dchild=1&keywords=rosie+perez&qid=1589756131&s=books&sr=1-1',
    },
    {
        title: 'The Girl He Used to Know: A Novel',
        author: 'Tracey Garvis Graves',
        description:
            'New York Times bestselling author of On the Island, Tracey Garvis Graves, presents the compelling, hopelessly romantic novel of unconditional love.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41QOIcOaUQL._SX328_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Girl-He-Used-Know/dp/1250200350',
    },
    {
        title: 'My Voice: A Memoir',
        author: 'Angie Martinez',
        description:
            'Angie Martinez is the “Voice of New York.” Now, for the first time, she candidly recounts the story of her rise to become an internationally celebrated hip hop radio icon.',
        image: 'https://m.media-amazon.com/images/I/51GCz6CophL.jpg',
        link: 'https://www.amazon.com/My-Voice-Memoir-Angie-Martinez-ebook/dp/B00ZQH2YCY',
    },
    {
        title: 'Sweat The Techinique',
        author: 'Rakim',
        description:
            ' Sweat the Technique offers insight into how Rakim thinks about words, music, writing, and rhyming as it teaches writers of all levels how to hone their craft. It is also a rare glimpse into Rakim’s private life, full of entertaining personal stories from his youth on Long Island growing up in a home and community filled with musiciansto the clubs of New York and the studios of Los Angeles during his rise to the top of popular music. ',
        image: 'https://i.harperapps.com/covers/9780062850256/x400.jpg',
        link: 'https://www.harpercollins.com/9780062850256/sweat-the-technique/',
    },
    {
        title: 'Hurricanes: A Memoir',
        author: 'Rick Ross, Neil Martinez-Belkin',
        description:
            'The highly anticipated memoir from hip-hop icon Rick Ross chronicles his coming of age amid Miami’s crack epidemic, his star-studded controversies and his unstoppable rise to fame.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551823187l/44285661._SY475_.jpg',
        link: 'https://www.goodreads.com/en/book/show/44285661-hurricanes',
    },
    {
        title: 'Perfect Date',
        author: 'Evelyn Lozada',
        description:
            'When a single mom ends up playing an unwilling fake girlfriend to a charming playboy baseball player, love suddenly turns everything upside down in',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Gk8H2Y26L._SX324_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Perfect-Date-Evelyn-Lozada/dp/1250204887/ref=pd_lpo_14_img_0/147-6340205-5836438?_encoding=UTF8&pd_rd_i=1250204887&pd_rd_r=0c9fefd6-b121-4786-9ce3-8792ed11a72a&pd_rd_w=x2naz&pd_rd_wg=6ofuW&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=RYNV9P6R4NZXBW8NP25J&psc=1&refRID=RYNV9P6R4NZXBW8NP25J',
    },
    {
        title: 'Fit Gurl: The Total-Body Turnaround Program ',
        author: 'Melissa Alcantara',
        description:
            'What do you want? To have biceps, a butt, and defined abs? To wear anything? To feel resilient and capable?These things are about one thing: work. If you’re ready to put in the time, commitment, and dedication, Fit Gurl will change your body and your life.',
        image: 'https://m.media-amazon.com/images/I/51dEHlEXjtL.jpg',
        link: 'https://www.amazon.com/Fit-Gurl-Total-Body-Turnaround-Program-ebook/dp/B07Z3QVCGR',
    },

    {
        title: 'Born a Crime: Stories from a South African Childhood',
        author: 'Trevor Noah',
        description:
            'Trevor Noah, one of the comedy world\'s fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \'Nelson Mandela once said, \'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.\' He was so right. When you make the effort to speak someone elses language, even if it\'s just basic phrases here and there, you are saying to them, \'I understand that you have a culture and identity that exists beyond me. I see you as a human being.\' (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah\'s raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you\'re reminded of the gift inherent in telling one\'s story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn\'t commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.',
        image: 'https://m.media-amazon.com/images/I/5102ogTDCGL.jpg',
        link: 'https://www.amazon.com/Born-Crime-Stories-African-Childhood-ebook/dp/B01DHWACVY/ref=sr_1_1?crid=258W0DQ0H6O52&dchild=1&keywords=trevor+noah+born+a+crime&qid=1589757724&s=digital-text&sprefix=trevor+%2Cdigital-text%2C141&sr=1-1',
    },
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then((data) => {
        console.log(`${data.result.n} records inserted!`);
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });