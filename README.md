# CCI Github client demo By Francois Rossouw

NB - This project is hosted for your convenience:  
[cci-github-demo.web.app/repos](https://cci-github-demo.web.app/repos)
 

## Installation

After cloning the project you would need to install all the project dependencies with the package manager of your choice. This can be done with the following command 

```bash
npm i
```
After all the dependencies have been downloaded, you should now be able to serve this angular project and run it locally with 

```bash
ng s
```


## Design Choices

I have decided to implement NgRx in this project ( even though a small demo project certainly does not need it ) - as we talked about NgRx in one of our previous interviews and I thought that whoever goes over this code would appreciate to see an example of my implementation of it.

I have also decided to use virtual scrolling on the /repos page - as this is a optimization technique that I thought would be well suited here - considering the fact that I am making use of images in the cards that the user scrolls through. Using this technique of virtual scrolling will not render elements unnecessarily and is thus considered a great technique for optimizing ones code.


I have decided to use a resolver for accessing my details view page. I have done this - as this allows me to implement a pattern that I have found quite useful from previous experience. The resolver's job in this case is to look in the store, if the repo's information is already present in the store - then the detail's component can use it. If the repo's information is not already in the store, then the resolver will fetch that information.

The benefit to doing this is that you are able to reduce the number of api calls that the client has to make. This also covers the use case of deep linking (I.e. should I user visit the details page without having gone through the list page).

I have decided to make use of Angular's built in HttpInterceptor to handle all api error's to provide a better user experience. This is a technique that I recently learned from one Maximilian Schwarzmüller's courses. To test this feature simply change the githubApi url in the environments file to a incorrect url.

For optimization's sake I am also deferring the loading of repo issues until they are explicitly requested by the user.

I have also taken the liberty of hosting this project for your convenience - please also feel free to check out [cci-github-demo.web.app/repos](https://cci-github-demo.web.app/repos)
