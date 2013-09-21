&lt;author-badge&gt;
====================

&lt;author-badge&gt; is — surprise! — an author badge to e. g. provide infos about the authors of your blogposts or whatever. The element takes the author's name, the author's image and a short description as inline-HTML. Additionally the usernames/IDs of twitter, GitHub, StackOverflow, Google+ and Flickr can be passed as attributes.

> Maintained by [Emanuel Kluge](https://github.com/herschel666).

## Demo

> [Check it live](http://herschel666.github.io/author-badge).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130905/polymer.min.js"></script>
	```	

2. Import Custom Element:

	```html
	<link rel="import" href="src/author-badge.html">
	```

3. Start using it!

	```html
	<author-badge
		twitter="twitter_handle"
		github="github_name"
		stackoverflow="SO-ID"
		gplus="G+-ID"
		flickr="flickr_name">
		<strong>Author's name</strong>
		<img src="path/to/image" alt="">
		<p>Lorem ipsum …</p>
	</author-badge>
	```

## Options

Attribute         | Options                   | Default             | Description
---               | ---                       | ---                 | ---
`twitter`         | *string*                  |                     | The author's twitter-handle
`github`          | *string* 	               |                     | The author's GitHub username
`stackoverflow`   | *int*                     |                     | The author's StackOverflow-ID
`gplus`           | *int*                     |                     | The author's Google-Plus-ID
`flickr`          | *string* 	               |                     | The author's Flickr username

**There are no required options!**

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.2 September 21, 2013
	* Updated Polymer to version 0.0.20130912
	* Put the badge's content — title, image and description — into separate helper-elements.

* v0.0.1 September 7, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)