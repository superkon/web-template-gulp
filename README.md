# web-template-gulp

## Init project

```
npm install
```

```
bower install
```

## Font Style

<p>
<b>STEP 1</b><br/>
Create config array under "/src/scss/_config.scss"<br/>
<br/>
<ol>
  <li>type option (default, class, id)</li>
  <li>array setting (desktop value, tablet value, mobile value)</li>
  <li>config option (type, family, color, weight, lineHeight, letterSpacing, margin), extend extra styles in function "textStyle__cssGenerator" under "/src/scss/_mix.scss" </li>
</ol>
</p>

<br/>

```
$config__text_jp:
(
  'body':
  (
    type: 'default',
    family: $text__family_sans,
    color: ($text__color_base, $text__color_base, $text__color_base)
  ),
  'default':
  (
    type: 'skip',
    family: $text__family_sans,
    color: ($text__color_base, $text__color_base, $text__color_base)
  ),
  'h1':
  (
    family: $text__family_sans,
    size: (em(36),em(36),em(36)),
    lineHeight: (em(36),em(36),em(36)),
    letterSpacing: (0, 0, 0),
    weight: (400, 400, 400),
    margin: (0 auto, 0 auto, 0 auto),
    color: ($text__color_base, $text__color_base, $text__color_base)
  ),
  'caption':
  (
    type: 'class',
    size: (em(36),em(36),em(36)),
    letterSpacing: (0, 0, 0)
  ),
  'caption_id':
  (
    type: 'id',
    size: (em(36),em(36),em(36)),
    letterSpacing: (0, 0, 0)
  )
)
```

```
@include textStyle__init($config__text_jp, "lang_jp");
```

```
.caption
{
	@include textStyle(caption);
}
```
