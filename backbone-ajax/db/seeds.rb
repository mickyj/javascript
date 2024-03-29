# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create([
  {title: 'web development', slug: 'web-development', content: '<p>Aliquam condimentum porta dui, at ullamcorper nibh malesuada nec. Nam ornare egestas odio, vitae luctus orci porta sed. Curabitur luctus, metus sed ornare faucibus, velit tellus scelerisque lacus, a tempor risus augue sed lectus.</p><p>Morbi placerat vehicula lectus in pretium. Curabitur orci dui, imperdiet vitae vulputate eget, dapibus sed tortor. Phasellus facilisis fringilla sem nec euismod. Vestibulum eleifend libero non neque imperdiet blandit. Donec adipiscing at ante sed sollicitudin. Etiam elementum ante et placerat posuere.</p>'},
  {title: 'web design', slug: 'web-design', content: '<p>Morbi placerat vehicula lectus in pretium. Curabitur orci dui, imperdiet vitae vulputate eget, dapibus sed tortor. Phasellus facilisis fringilla sem nec euismod. Vestibulum eleifend libero non neque imperdiet blandit. Donec adipiscing at ante sed sollicitudin. Etiam elementum ante et placerat posuere. Nullam eget orci sed turpis dictum condimentum ut eget neque. Integer adipiscing ante quis eros tincidunt, sed scelerisque odio dictum.</p>'},
  {title: 'photography', slug: 'photography', content: '<p>no content</p>'},
  {title: 'coffee drinking', slug: 'coffee-drinking', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan interdum quam vitae suscipit. </p>'}
])

Comment.create([
  {twaddle: "Hello there I am a web dev comment", post_id: 1},
  {twaddle: "Great article web dev comment", post_id: 1},
  {twaddle: "Hello there I am a web design comment", post_id: 2},
  {twaddle: "Great article web web design comment", post_id: 2},
  {twaddle: "Hello there I am a photography comment", post_id: 3},
  {twaddle: "Great article photography comment", post_id: 3},
  {twaddle: "Hello there I am a coffee-drinking comment", post_id: 4},
  {twaddle: "Great article coffee-drinking comment", post_id: 4},
  ])