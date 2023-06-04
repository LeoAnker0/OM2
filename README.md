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

<hr>

###### *new stuff*

* Figure out a way to remove the side bar, i don't see it as being particularly crucial to how this site will be working in the future, people won't be consuming music on here, they will be listening to their own silly little tunes.

* Remove our god awful logo from the top left hand corner and shove the search box up there, and come up with some small tabs or something for accessing the different areas when the side bar is gone

* I've already said it, but colours, could make such a big difference

* Get some noise and texture involved in making this design good, figure out how to get feTurbulence noise working

* Make more aspects of the design curvy, make that top left square corner circular in nature

* Turn all of the clunky scroll bars, if we still have any, into 1px wide affairs, and then make them have gradients, so that they slide into appearence.

<hr>

###### *even newer stuff...*

* Perhaps make the side bar a slide out / sliding affair, where the user can choose to hide it, which would give more space for things. And then it could be slid out permeanantly, or it could be a thing where if you hover over in the left hand side, it will appear, but then hide itself. Or perhaps what would be even more interesting would be that in some views/states it's hidden, so when you're up in the song editor and such it would be hidden. But then when viewing your library or some other future actions it could be out, since it would be more useful in those places.

...

* With the background opacity element in *MATERIAL-blur-1*, make it so that when no song has been selected it is a sort of greyish colour, but that then changes to being a many coloured multi gradient (which is based on colours extracted from the current songs image), but which is static when no music is playing, but that then when music is playing mooves/grooves along with the rhythm (at a much reduced rate) like in apple music's lyrics for mobile, this feature will most likely require some more server side stuff, to calculate colours (maybe not???), but definetly for calculating the bpm and the rhythm, or perhaps there is an even easier way to make it appear as though it is responding to the rhythm of the music, only time will tell.

### New Features
* Amend the database so that songs have their own individual entrances in the database, since this is not something that we had before...

* Ability to upload multiple takes/versions of a songs as the same song in the library

* Ability to crop images properly (1/1) on the front end, as well as enforcing that on the backend.

* Add file conversion on the backend, taking in whatever file formats, and outputting as a vorbis or something

* Share page where a song, or several versions of the song, or an album, etc... can be shared to people who haven't signed up, and it won't require creds or nothing. So really just a simple way to share stuff, and it should be a very clean page, which should ideally work well across lots of different screen sizes, especially since the people who end up on the share page could be litteraly any random person, as opposed to the type of person who would use this service.

* Create a view song view or something like that, where if the user clicks on the 'lcd' during playback or when there is a song up there, bring up a different view, where the image is bigger and more of the details are available? And then bring in the splash of colour mentioned in visualss

* Add in different images (or different resolutions), which means that when loading in the image's load in quicker, and also webp variants and such, this is something that when i am making it will be a pain, but when it's all being loaded in by JS it won't be a problem at all since it can all sit inside of a picture tag.

* For accounts create the ability to reset passwords, as well as making a confirm email feature, since it's the main way of establishing uniqueness when signing up.

<hr>

* This would be far in the future, but creating a setting sort of like a community campfire, where people could play their demos or other things, little snippets, would be really cool, since it would give the feeling that it was this small thing.
We could even go as far as making that section of the website decidedly seperate, Perhaps creating a 3d environment with some of the different libraries that support that, and just making it a really nice and boutique experience for people to experience when trying to share their music with other people, which can at times be daunting. (The aesthetic would sort of be organic 3d pixels, so that it hopefully would be performant across the board, but also pretty)

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



