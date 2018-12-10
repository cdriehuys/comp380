# [theywantyourdata.com](https://theywantyourdata.com)

Website to educate people on the risks of data breaches and how to mitigate
them.

This website was created as a final project for COMP 380 at UNC Chapel Hill.

## Contributing

This website is a static site built with [Hugo][hugo] and deployed through
[Netlify][netlify]. The deployment process is automatic, so any changes pushed to the `master` branch will be published.

### Getting the Source

Whether you are adding content or modifying the layout of the site, the first step is to clone the source code.

```bash
git clone git@github.com:cdriehuys/comp380
# Or, if you don't have an SSH key on GitHub
git clone https://github.com/cdriehuys/comp380
```

### Writing Content

If all you need to do is write content, ie write Markdown files, you do not need any additional software. Simply make the changes you would like, commit them to a separate branch, and [open a pull request][pull-requests].

```bash
git checkout -b my-new-post

# Add your content
nano content/posts/my-new-post.md

git commit -am "Added my new post."
git push --set-upstream origin my-new-post
```

Don't forget to open a pull request for your newly pushed branch.

### Advanced Contributions

If you would like to make more advanced changes such as adding JavaScript, custom shortcodes, or changing the layout, you most likely want to [install Hugo][hugo-install] so that you can preview your changes locally.

Once you have Hugo installed and available on your path, you can run `hugo server` to view a local copy of the website.

```bash
cd comp380
hugo server
```

This will launch a server on your machine accessible at `http://localhost:1313`. The server automatically watches for changes and will reload if you edit a file.

## License

This project is licensed under the [MIT License](LICENSE).

## Authors

Chathan Driehuys (@cdriehuys)  
Elijah Long (@elijah498)  
Kai Marcus (@kmarcus1410)


[hugo]: https://gohugo.io/
[hugo-install]: https://gohugo.io/getting-started/installing/
[netlify]: https://www.netlify.com/
[pull-requests]: https://github.com/cdriehuys/comp380/pulls
