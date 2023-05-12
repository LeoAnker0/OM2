# Orange Music 2
I am going to be remaking Orange Music, and while I might reuse some of the front end code, I have a number of things that I would like to change with how the old one worked, and here I would like to outlay what those things are:

<hr>

### Visuals
* I would like to clean up how the website looks, particularly making some aspects less muddy as well as brining in new fresh colours, rather than the current orange/yellow toned ones which I don't think are looking as good as they ought to have. So rather I will be going for a salmon pink / light blue scheme for the highlights, and then I will be getting a new batch of greys.

* But I am also interested in creating greater visual consistency between the different areas, namely the login/signup pages, and more importantly the song upload page, which is very important, and is currently not particularly good looking nor functional.

* Make the backgrounds less flat, by adding in some slight colour blur, so it's behind the content, but not invisible, but also not distracting, maybe only use in some specfic places, like for the individual song view, or the share page?

* Change the fonts, find my own fonts, and use those instead.

* Make new icons? more original would be better, especially since it would be cool if they more fit my vision?

* In the expanded album view, take the image, and then take a lower resolution one behind it and blur it outside of it's container, so there's a slight blur shadow behind the image which is on top of that layer.

### New Features
* Amend the database so that songs have their own individual entrances in the database, since this is not something that we had before...

* Ability to upload multiple takes/versions of a songs as the same song in the library

* Ability to crop images properly (1/1) on the front end, as well as enforcing that on the backend.

* Add file conversion on the backend, taking in whatever file formats, and outputting as a vorbis or something

* Share page where a song, or several versions of the song, or an album, etc... can be shared to people who haven't signed up, and it won't require creds or nothing. So really just a simple way to share stuff, and it should be a very clean page, which should ideally work well across lots of different screen sizes, especially since the people who end up on the share page could be litteraly any random person, as opposed to the type of person who would use this service.

* Create a view song view or something like that, where if the user clicks on the 'lcd' during playback or when there is a song up there, bring up a different view, where the image is bigger and more of the details are available? And then bring in the splash of colour mentioned in visualss

* Add in different images (or different resolutions), which means that when loading in the image's load in quicker, and also webp variants and such, this is something that when i am making it will be a pain, but when it's all being loaded in by JS it won't be a problem at all since it can all sit inside of a picture tag.

### Tech Stack
* Move away from xampp

* Move over to using vite, and find out how to deploy that.

* Use api's  on the front end to talk with the backend, rather than how it's hardcoded communications at this point in time.

* Stop using PHP and use something like Python for the backend

* Use docker to deploy

* Find a new database perhaps

* Refactor/go over all old code, since some of the stuff in their currently is quite bad, and I should focus on making the whole thing more performant as well, since certain part aren't really particularly snappy at the moment. 

* Also, look out for code that is repeated, since this could have happened, and now I know how to work around such a problem.

* Rejig how all the code works togther, I now have a better understanding of Javascript and I know how to make it better.

* HTML Templates, use HTML templates for the different components that i currently have sitting in JS files which is really messy there, so instead have them sitting in the standard HTML templates, and figure out how it is that I can then populate the template properly.

* For the different popup things, like the about album and so on, (which might be removed in future since it's perhaps superflous to the customer group?), where we use the native html modals, and blur the background and so on.



