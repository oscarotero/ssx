/**
 * All CSS properties
 */
export interface CSSProperties {
  /**
   * Custom property
   */
  [key: string]: unknown;

  /**
   * Sets the color of the elements accent
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  "accent-color"?: string;

  /**
   * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
   * Syntax: normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  "align-content"?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "stretch"
    | "start"
    | "end"
    | "normal"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "safe"
    | "unsafe"
    | string;

  /**
   * Aligns flex items along the cross axis of the current line of the flex container.
   * Syntax: normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  "align-items"?:
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "stretch"
    | "normal"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe"
    | "unsafe"
    | string;

  /**
   * Allows the default alignment along the cross axis to be overridden for individual flex items.
   * Syntax: auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  "align-self"?:
    | "auto"
    | "normal"
    | "self-end"
    | "self-start"
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "stretch"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe"
    | "unsafe"
    | string;

  /**
   * The alignment-baseline CSS property specifies the specific baseline used to align the box's text and inline-level contents. Baseline alignment is the relationship among the baselines of multiple alignment subjects within an alignment context. When performing baseline alignment, the alignment-baseline property value specifies which baseline of the box is aligned to the corresponding baseline of its alignment context.
   * Syntax: baseline | alphabetic | ideographic | middle | central | mathematical | text-before-edge | text-after-edge
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  "alignment-baseline"?:
    | "baseline"
    | "alphabetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "text-before-edge"
    | "text-after-edge";

  /**
   * Shorthand that resets all properties except 'direction' and 'unicode-bidi'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all?: string;

  /**
   * Provides alternative text for assistive technology to replace the generated content of a ::before or ::after element.
   */
  alt?: string;

  /**
   * The anchor-name property declares that an element is an anchor element, and gives it a list of anchor names to be targeted by.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  "anchor-name"?: string;

  /**
   * This property scopes the specified anchor names, and lookups for these anchor names, to this element’s subtree
   */
  "anchor-scope"?: string;

  /**
   * Shorthand property combines six of the animation properties into a single property.
   * Syntax: <single-animation>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation?:
    | "alternate"
    | "alternate-reverse"
    | "backwards"
    | "both"
    | "forwards"
    | "infinite"
    | "none"
    | "normal"
    | "reverse"
    | string;

  /**
   * The composite operation to use when multiple animations affect the same property.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  "animation-composition"?: string;

  /**
   * Defines when the animation will start.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  "animation-delay"?: string;

  /**
   * Defines whether or not the animation should play in reverse on alternate cycles.
   * Syntax: <single-animation-direction>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  "animation-direction"?:
    | "alternate"
    | "alternate-reverse"
    | "normal"
    | "reverse"
    | string;

  /**
   * Defines the length of time that an animation takes to complete one cycle.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  "animation-duration"?: string;

  /**
   * Defines what values are applied by the animation outside the time it is executing.
   * Syntax: <single-animation-fill-mode>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  "animation-fill-mode"?: "backwards" | "both" | "forwards" | "none" | string;

  /**
   * Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
   * Syntax: <single-animation-iteration-count>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  "animation-iteration-count"?: "infinite" | string;

  /**
   * Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
   * Syntax: [ none | <keyframes-name> ]#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  "animation-name"?: "none" | string;

  /**
   * Defines whether the animation is running or paused.
   * Syntax: <single-animation-play-state>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  "animation-play-state"?: "paused" | "running" | string;

  /**
   * The animation-range CSS shorthand property is used to set the start and end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start and end.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  "animation-range"?: string;

  /**
   * The animation-range-end CSS property is used to set the end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will end.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  "animation-range-end"?: string;

  /**
   * The animation-range-start CSS property is used to set the start of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  "animation-range-start"?: string;

  /**
   * Specifies the names of one or more @scroll-timeline at-rules to describe the element's scroll animations.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  "animation-timeline"?: string;

  /**
   * Describes how the animation will progress over one cycle of its duration.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  "animation-timing-function"?: string;

  /**
   * Changes the appearance of buttons and other controls to resemble native controls.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance?: string;

  /**
   * The aspect-ratio   CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  "aspect-ratio"?: string;

  /**
   * The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  "backdrop-filter"?: string;

  /**
   * Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
   * Syntax: visible | hidden
   * Baseline: High (Supported since 2022-03-14)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  "backface-visibility"?: "hidden" | "visible";

  /**
   * Shorthand property for setting most background properties at the same place in the style sheet.
   * Syntax: <bg-layer>#? , <final-bg-layer>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background?: "fixed" | "local" | "none" | "scroll" | string | 0;

  /**
   * Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').
   * Syntax: <attachment>#
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  "background-attachment"?: "fixed" | "local" | "scroll" | string;

  /**
   * Defines the blending mode of each background layer.
   * Syntax: <blend-mode>#
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  "background-blend-mode"?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | string;

  /**
   * Determines the background painting area.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  "background-clip"?: string;

  /**
   * Sets the background color of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  "background-color"?: string;

  /**
   * Sets the background image(s) of an element.
   * Syntax: <bg-image>#
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  "background-image"?: "none" | string;

  /**
   * For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  "background-origin"?: string;

  /**
   * Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  "background-position"?: string;

  /**
   * If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
   * Syntax: [ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#
   * Baseline: High (Supported since 2016-09-20)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  "background-position-x"?: "center" | "left" | "right" | string | 0;

  /**
   * If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
   * Syntax: [ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#
   * Baseline: High (Supported since 2016-09-20)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  "background-position-y"?: "bottom" | "center" | "top" | string | 0;

  /**
   * Specifies how background images are tiled after they have been sized and positioned.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  "background-repeat"?: string;

  /**
   * Specifies the size of the background images.
   * Syntax: <bg-size>#
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  "background-size"?: "auto" | "contain" | "cover" | string | 0;

  /**
   * Allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.
   */
  "baseline-shift"?: string;

  /**
   * IE only. Used to extend behaviors of the browser.
   */
  behavior?: string;

  /**
   * Size of an element in the direction opposite that of the direction specified by 'writing-mode'.
   * Syntax: <'width'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  "block-size"?: "auto" | string | 0;

  /**
   * Shorthand property for setting border width, style, and color.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border?: string;

  /**
   * The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  "border-block"?: string;

  /**
   * The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  "border-block-color"?: string;

  /**
   * Logical 'border-bottom'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  "border-block-end"?: string;

  /**
   * Logical 'border-bottom-color'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  "border-block-end-color"?: string;

  /**
   * Logical 'border-bottom-style'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  "border-block-end-style"?: string;

  /**
   * Logical 'border-bottom-width'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  "border-block-end-width"?: string;

  /**
   * Logical 'border-top'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  "border-block-start"?: string;

  /**
   * Logical 'border-top-color'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  "border-block-start-color"?: string;

  /**
   * Logical 'border-top-style'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  "border-block-start-style"?: string;

  /**
   * Logical 'border-top-width'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  "border-block-start-width"?: string;

  /**
   * The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  "border-block-style"?: string;

  /**
   * The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  "border-block-width"?: string;

  /**
   * Shorthand property for setting border width, style and color.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  "border-bottom"?: string;

  /**
   * Sets the color of the bottom border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  "border-bottom-color"?: string;

  /**
   * Defines the radii of the bottom left outer border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: string;

  /**
   * Defines the radii of the bottom right outer border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: string;

  /**
   * Sets the style of the bottom border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  "border-bottom-style"?: string;

  /**
   * Sets the thickness of the bottom border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  "border-bottom-width"?: string;

  /**
   * Selects a table's border model.
   * Syntax: separate | collapse
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  "border-collapse"?: "collapse" | "separate";

  /**
   * The color of the border around all four edges of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  "border-color"?: string;

  /**
   * The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  "border-end-end-radius"?: string;

  /**
   * The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  "border-end-start-radius"?: string;

  /**
   * Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
   * Syntax: <'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  "border-image"?:
    | "auto"
    | "fill"
    | "none"
    | "repeat"
    | "round"
    | "space"
    | "stretch"
    | "url()"
    | string
    | 0;

  /**
   * The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  "border-image-outset"?: string;

  /**
   * Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.
   * Syntax: [ stretch | repeat | round | space ]{1,2}
   * Baseline: High (Supported since 2016-03-21)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  "border-image-repeat"?: "repeat" | "round" | "space" | "stretch";

  /**
   * Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.
   * Syntax: [ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  "border-image-slice"?: "fill" | string;

  /**
   * Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.
   * Syntax: none | <image>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  "border-image-source"?: "none" | string;

  /**
   * The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.
   * Syntax: [ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  "border-image-width"?: "auto" | string | 0;

  /**
   * The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  "border-inline"?: string;

  /**
   * The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  "border-inline-color"?: string;

  /**
   * Logical 'border-right'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  "border-inline-end"?: string;

  /**
   * Logical 'border-right-color'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  "border-inline-end-color"?: string;

  /**
   * Logical 'border-right-style'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  "border-inline-end-style"?: string;

  /**
   * Logical 'border-right-width'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  "border-inline-end-width"?: string;

  /**
   * Logical 'border-left'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  "border-inline-start"?: string;

  /**
   * Logical 'border-left-color'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  "border-inline-start-color"?: string;

  /**
   * Logical 'border-left-style'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  "border-inline-start-style"?: string;

  /**
   * Logical 'border-left-width'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  "border-inline-start-width"?: string;

  /**
   * The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  "border-inline-style"?: string;

  /**
   * The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  "border-inline-width"?: string;

  /**
   * Shorthand property for setting border width, style and color
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  "border-left"?: string;

  /**
   * Sets the color of the left border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  "border-left-color"?: string;

  /**
   * Sets the style of the left border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  "border-left-style"?: string;

  /**
   * Sets the thickness of the left border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  "border-left-width"?: string;

  /**
   * Defines the radii of the outer border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  "border-radius"?: string;

  /**
   * Shorthand property for setting border width, style and color
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  "border-right"?: string;

  /**
   * Sets the color of the right border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  "border-right-color"?: string;

  /**
   * Sets the style of the right border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  "border-right-style"?: string;

  /**
   * Sets the thickness of the right border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  "border-right-width"?: string;

  /**
   * The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  "border-spacing"?: string;

  /**
   * The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  "border-start-end-radius"?: string;

  /**
   * The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  "border-start-start-radius"?: string;

  /**
   * The style of the border around edges of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  "border-style"?: string;

  /**
   * Shorthand property for setting border width, style and color
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  "border-top"?: string;

  /**
   * Sets the color of the top border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  "border-top-color"?: string;

  /**
   * Defines the radii of the top left outer border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  "border-top-left-radius"?: string;

  /**
   * Defines the radii of the top right outer border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  "border-top-right-radius"?: string;

  /**
   * Sets the style of the top border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  "border-top-style"?: string;

  /**
   * Sets the thickness of the top border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  "border-top-width"?: string;

  /**
   * Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  "border-width"?: string;

  /**
   * Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.
   * Syntax: auto | <length-percentage> | <anchor()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom?: "auto" | string | 0;

  /**
   * The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   * Syntax: start | center | end | baseline | stretch
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  "box-align"?: "start" | "center" | "end" | "baseline" | "stretch";

  /**
   * Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.
   * Syntax: slice | clone
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  "box-decoration-break"?: "clone" | "slice";

  /**
   * The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   * Syntax: normal | reverse | inherit
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  "box-direction"?: "normal" | "reverse" | "inherit";

  /**
   * The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  "box-flex"?: string;

  /**
   * The box-flex-group CSS property assigns the flexbox's child elements to a flex group.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  "box-flex-group"?: string;

  /**
   * The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   * Syntax: single | multiple
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  "box-lines"?: "single" | "multiple";

  /**
   * The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  "box-ordinal-group"?: string;

  /**
   * The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.
   * Syntax: horizontal | vertical | inline-axis | block-axis | inherit
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  "box-orient"?:
    | "horizontal"
    | "vertical"
    | "inline-axis"
    | "block-axis"
    | "inherit";

  /**
   * The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   * Syntax: start | center | end | justify
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  "box-pack"?: "start" | "center" | "end" | "justify";

  /**
   * Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.
   * Syntax: none | <shadow>#
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  "box-shadow"?: "inset" | "none" | string | 0;

  /**
   * Specifies the behavior of the 'width' and 'height' properties.
   * Syntax: content-box | border-box
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  "box-sizing"?: "border-box" | "content-box";

  /**
   * Describes the page/column/region break behavior after the generated box.
   * Syntax: auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region
   * Baseline: High (Supported since 2019-01-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  "break-after"?:
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "column"
    | "left"
    | "page"
    | "right";

  /**
   * Describes the page/column/region break behavior before the generated box.
   * Syntax: auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region
   * Baseline: High (Supported since 2019-01-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  "break-before"?:
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "column"
    | "left"
    | "page"
    | "right";

  /**
   * Describes the page/column/region break behavior inside the principal box.
   * Syntax: auto | avoid | avoid-page | avoid-column | avoid-region
   * Baseline: High (Supported since 2019-01-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  "break-inside"?: "auto" | "avoid" | "avoid-column" | "avoid-page";

  /**
   * Specifies the position of the caption box with respect to the table box.
   * Syntax: top | bottom
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  "caption-side"?: "bottom" | "top";

  /**
   * Shorthand for setting caret-color and caret-shape.
   */
  caret?: string;

  /**
   * Controls the color of the text insertion indicator.
   * Syntax: auto | <color>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  "caret-color"?: "auto" | string;

  /**
   * Specifies the desired shape of the text insertion caret.
   * Syntax: auto | bar | block | underscore
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  "caret-shape"?: "auto" | "bar" | "block" | "underscore";

  /**
   * Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.
   * Syntax: none | left | right | both | inline-start | inline-end
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear?: "both" | "left" | "none" | "right";

  /**
   * Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element's box.
   * Syntax: <shape> | auto
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip?: "auto" | "rect()" | string;

  /**
   * Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.
   * Syntax: <clip-source> | [ <basic-shape> || <geometry-box> ] | none
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  "clip-path"?: "none" | "url()" | string;

  /**
   * Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.
   * Syntax: nonzero | evenodd
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  "clip-rule"?: "evenodd" | "nonzero";

  /**
   * Sets the color of an element's text
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color?: string;

  /**
   * Specifies the color space for imaging operations performed via filter effects.
   * Syntax: auto | sRGB | linearRGB
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  "color-interpolation-filters"?: "auto" | "linearRGB" | "sRGB";

  /**
   * The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  "color-scheme"?: string;

  /**
   * Describes the optimal number of columns into which the content of the element will be flowed.
   * Syntax: <integer> | auto
   * Baseline: High (Supported since 2017-03-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  "column-count"?: "auto" | string | number;

  /**
   * In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.
   * Syntax: auto | balance
   * Baseline: High (Supported since 2017-03-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  "column-fill"?: "auto" | "balance";

  /**
   * Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
   * Syntax: normal | <length-percentage>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  "column-gap"?: "normal" | string | 0;

  /**
   * Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  "column-rule"?: string;

  /**
   * Sets the color of the column rule
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  "column-rule-color"?: string;

  /**
   * Sets the style of the rule between columns of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  "column-rule-style"?: string;

  /**
   * Sets the width of the rule between columns. Negative values are not allowed.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  "column-rule-width"?: string;

  /**
   * Describes the page/column break behavior after the generated box.
   * Syntax: none | all
   * Baseline: High (Supported since 2020-07-28)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  "column-span"?: "all" | "none";

  /**
   * Describes the width of columns in multicol elements.
   * Syntax: <length> | auto
   * Baseline: High (Supported since 2016-11-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  "column-width"?: "auto" | string | 0;

  /**
   * A shorthand property which sets both 'column-width' and 'column-count'.
   * Syntax: <'column-width'> || <'column-count'>
   * Baseline: High (Supported since 2017-03-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns?: "auto" | string | number | 0;

  /**
   * Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.
   * Syntax: none | strict | content | [ [ size || inline-size ] || layout || style || paint ]
   * Baseline: High (Supported since 2022-03-14)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain?:
    | "none"
    | "strict"
    | "content"
    | "size"
    | "layout"
    | "style"
    | "paint";

  /**
   * Block size of an element when the element is subject to size containment.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  "contain-intrinsic-block-size"?: string;

  /**
   * Height of an element when the element is subject to size containment.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  "contain-intrinsic-height"?: string;

  /**
   * Inline size of an element when the element is subject to size containment.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  "contain-intrinsic-inline-size"?: string;

  /**
   * Size of an element when the element is subject to size containment.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  "contain-intrinsic-size"?: string;

  /**
   * Width of an element when the element is subject to size containment.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  "contain-intrinsic-width"?: string;

  /**
   * The container shorthand CSS property establishes the element as a query container and specifies the name or name for the containment context used in a container query.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container?: string;

  /**
   * The container-name CSS property specifies a list of query container names used by the @container at-rule in a container query.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  "container-name"?: string;

  /**
   * The container-type CSS property is used to define the type of containment used in a container query.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  "container-type"?: string;

  /**
   * Determines which page-based occurrence of a given element is applied to a counter or string value.
   * Syntax: normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content?:
    | "attr()"
    | "counter(name)"
    | "icon"
    | "none"
    | "normal"
    | "url()"
    | string;

  /**
   * Controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed.
   * Syntax: visible | auto | hidden
   * Baseline: Low (Supported since 2024-09-16)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  "content-visibility"?: "visible" | "auto" | "hidden";

  /**
   * Manipulate the value of existing counters.
   * Syntax: [ <counter-name> <integer>? ]+ | none
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  "counter-increment"?: "none" | string | number;

  /**
   * Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.
   * Syntax: [ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  "counter-reset"?: "none" | string | number;

  /**
   * The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  "counter-set"?: string;

  /**
   * Allows control over cursor appearance in an element
   * Syntax: [ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]
   * Baseline: High (Supported since 2021-12-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor?:
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "-moz-grab"
    | "-moz-grabbing"
    | "-moz-zoom-in"
    | "-moz-zoom-out"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "n-resize"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "se-resize"
    | "s-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "wait"
    | "-webkit-grab"
    | "-webkit-grabbing"
    | "-webkit-zoom-in"
    | "-webkit-zoom-out"
    | "w-resize"
    | "zoom-in"
    | "zoom-out"
    | string;

  /**
   * The cx CSS property defines the x-axis center point of an SVG circle or ellipse element. If present, it overrides the element's cx attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx?: string;

  /**
   * The cy CSS property defines the y-axis center point of an SVG circle or ellipse elements. If present, it overrides the element's cy attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy?: string;

  /**
   * The d CSS property defines a path to be drawn by the SVG path element. If present, it overrides the element's d attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d?: string;

  /**
   * Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.
   * Syntax: ltr | rtl
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction?: "ltr" | "rtl";

  /**
   * In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.
   * Syntax: [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display?:
    | "block"
    | "contents"
    | "flex"
    | "flexbox"
    | "flow-root"
    | "grid"
    | "inline"
    | "inline-block"
    | "inline-flex"
    | "inline-flexbox"
    | "inline-table"
    | "list-item"
    | "-moz-box"
    | "-moz-deck"
    | "-moz-grid"
    | "-moz-grid-group"
    | "-moz-grid-line"
    | "-moz-groupbox"
    | "-moz-inline-box"
    | "-moz-inline-grid"
    | "-moz-inline-stack"
    | "-moz-marker"
    | "-moz-popup"
    | "-moz-stack"
    | "-ms-flexbox"
    | "-ms-grid"
    | "-ms-inline-flexbox"
    | "-ms-inline-grid"
    | "none"
    | "ruby"
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group"
    | "-webkit-box"
    | "-webkit-flex"
    | "-webkit-inline-box"
    | "-webkit-inline-flex"
    | string;

  /**
   * The dominant-baseline CSS property specifies the specific baseline used to align the box's text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box's alignment context. If present, it overrides the shape's dominant-baseline attribute.
   * Syntax: auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  "dominant-baseline"?:
    | "auto"
    | "text-bottom"
    | "alphabetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "hanging"
    | "text-top";

  /**
   * In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.
   * Syntax: show | hide
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  "empty-cells"?: "hide" | "-moz-show-background" | "show";

  /**
   * Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.
   */
  "enable-background"?: "accumulate" | "new" | number | 0;

  /**
   * The field-sizing CSS property enables you to control the sizing behavior of elements that are given a default preferred size, such as form control elements. This property enables you to override the default sizing behavior, allowing form controls to adjust in size to fit their contents.
   * Syntax: content | fixed
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  "field-sizing"?: "content" | "fixed";

  /**
   * Paints the interior of the given graphical element.
   * Syntax: <paint>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill?: "url()" | "none" | string;

  /**
   * Specifies the opacity of the painting operation used to paint the interior the current object.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  "fill-opacity"?: string;

  /**
   * Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.
   * Syntax: nonzero | evenodd
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  "fill-rule"?: "evenodd" | "nonzero";

  /**
   * Processes an element's rendering before it is displayed in the document, by applying one or more filter effects.
   * Syntax: none | <filter-value-list>
   * Baseline: High (Supported since 2016-09-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter?:
    | "none"
    | "blur()"
    | "brightness()"
    | "contrast()"
    | "drop-shadow()"
    | "grayscale()"
    | "hue-rotate()"
    | "invert()"
    | "opacity()"
    | "saturate()"
    | "sepia()"
    | "url()"
    | string;

  /**
   * Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.
   * Syntax: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex?: "auto" | "content" | "none" | string | 0;

  /**
   * Sets the flex basis.
   * Syntax: content | <'width'>
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  "flex-basis"?: "auto" | "content" | string | 0;

  /**
   * Specifies how flex items are placed in the flex container, by setting the direction of the flex container's main axis.
   * Syntax: row | row-reverse | column | column-reverse
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  "flex-direction"?: "column" | "column-reverse" | "row" | "row-reverse";

  /**
   * Specifies how flexbox items are placed in the flexbox.
   * Syntax: <'flex-direction'> || <'flex-wrap'>
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  "flex-flow"?:
    | "column"
    | "column-reverse"
    | "nowrap"
    | "row"
    | "row-reverse"
    | "wrap"
    | "wrap-reverse"
    | string;

  /**
   * Sets the flex grow factor. Negative numbers are invalid.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  "flex-grow"?: string;

  /**
   * Sets the flex shrink factor. Negative numbers are invalid.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  "flex-shrink"?: string;

  /**
   * Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
   * Syntax: nowrap | wrap | wrap-reverse
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  "flex-wrap"?: "nowrap" | "wrap" | "wrap-reverse";

  /**
   * Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.
   * Syntax: left | right | none | inline-start | inline-end
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float?: "inline-end" | "inline-start" | "left" | "none" | "right";

  /**
   * Indicates what color to use to flood the current filter primitive subregion.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  "flood-color"?: string;

  /**
   * Indicates what opacity to use to flood the current filter primitive subregion.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  "flood-opacity"?: string;

  /**
   * Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.
   * Syntax: [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "caption"
    | "icon"
    | "italic"
    | "large"
    | "larger"
    | "lighter"
    | "medium"
    | "menu"
    | "message-box"
    | "normal"
    | "oblique"
    | "small"
    | "small-caps"
    | "small-caption"
    | "smaller"
    | "status-bar"
    | "x-large"
    | "x-small"
    | "xx-large"
    | "xx-small"
    | string;

  /**
   * Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.
   * Syntax: auto | normal | none
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  "font-kerning"?: "auto" | "none" | "normal";

  /**
   * The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.
   * Syntax: normal | <string>
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  "font-language-override"?: "normal" | string;

  /**
   * The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
   * Syntax: auto | none
   * Baseline: High (Supported since 2020-03-24)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  "font-optical-sizing"?: "auto" | "none";

  /**
   * The font-palette CSS property allows specifying one of the many palettes contained in a font that a user agent should use for the font. Users can also override the values in a palette or create a new palette by using the @font-palette-values at-rule.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  "font-palette"?: string;

  /**
   * Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.
   * Syntax: <absolute-size> | <relative-size> | <length-percentage [0,∞]> | math
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  "font-size"?:
    | "large"
    | "larger"
    | "medium"
    | "small"
    | "smaller"
    | "x-large"
    | "x-small"
    | "xx-large"
    | "xx-small"
    | string
    | 0;

  /**
   * Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same regardless of the font used.
   * Syntax: none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]
   * Baseline: Low (Supported since 2024-07-25)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  "font-size-adjust"?: "none" | string;

  /**
   * Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
   * Syntax: none | [ weight || style || small-caps || position]
   * Baseline: High (Supported since 2022-01-06)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  "font-synthesis"?: "none" | "style" | "weight";

  /**
   * The font-synthesis-position CSS property lets you specify whether or not a browser may synthesize the subscript and superscript "position" typefaces when they are missing in a font family, while using font-variant-position to set the positions.
   * Syntax: auto | none
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  "font-synthesis-position"?: "auto" | "none";

  /**
   * The font-synthesis-small-caps CSS property lets you specify whether or not the browser may synthesize small-caps typeface when it is missing in a font family. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.
   * Syntax: auto | none
   * Baseline: High (Supported since 2023-03-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  "font-synthesis-small-caps"?: "auto" | "none";

  /**
   * The font-synthesis-style CSS property lets you specify whether or not the browser may synthesize the oblique typeface when it is missing in a font family.
   * Syntax: auto | none
   * Baseline: High (Supported since 2023-03-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  "font-synthesis-style"?: "auto" | "none";

  /**
   * The font-synthesis-weight CSS property lets you specify whether or not the browser may synthesize the bold typeface when it is missing in a font family.
   * Syntax: auto | none
   * Baseline: High (Supported since 2023-03-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  "font-synthesis-weight"?: "auto" | "none";

  /**
   * Specifies variant representations of the font
   * Syntax: normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  "font-variant"?: "normal" | "small-caps" | string;

  /**
   * For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.
   * Syntax: normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]
   * Baseline: High (Supported since 2023-03-13)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  "font-variant-alternates"?:
    | "annotation()"
    | "character-variant()"
    | "historical-forms"
    | "normal"
    | "ornaments()"
    | "styleset()"
    | "stylistic()"
    | "swash()"
    | string;

  /**
   * Specifies control over capitalized forms.
   * Syntax: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  "font-variant-caps"?:
    | "all-petite-caps"
    | "all-small-caps"
    | "normal"
    | "petite-caps"
    | "small-caps"
    | "titling-caps"
    | "unicase";

  /**
   * Allows control of glyph substitute and positioning in East Asian text.
   * Syntax: normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  "font-variant-east-asian"?:
    | "full-width"
    | "jis04"
    | "jis78"
    | "jis83"
    | "jis90"
    | "normal"
    | "proportional-width"
    | "ruby"
    | "simplified"
    | "traditional"
    | string;

  /**
   * The font-variant-emoji CSS property specifies the default presentation style for displaying emojis.
   * Syntax: normal | text | emoji | unicode
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  "font-variant-emoji"?: "normal" | "text" | "emoji" | "unicode";

  /**
   * Specifies control over which ligatures are enabled or disabled. A value of 'normal' implies that the defaults set by the font are used.
   * Syntax: normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  "font-variant-ligatures"?:
    | "additional-ligatures"
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-additional-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | string;

  /**
   * Specifies control over numerical forms.
   * Syntax: normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  "font-variant-numeric"?:
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | string;

  /**
   * Specifies the vertical position
   * Syntax: normal | sub | super
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  "font-variant-position"?: "normal" | "sub" | "super";

  "font-width"?: string;

  /**
   * Allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS
   * Syntax: auto | none | preserve-parent-color
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  "forced-color-adjust"?: "auto" | "none" | "preserve-parent-color";

  /**
   * The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap?: string;

  /**
   * Controls glyph orientation when the inline-progression-direction is horizontal.
   */
  "glyph-orientation-horizontal"?: string;

  /**
   * Controls glyph orientation when the inline-progression-direction is vertical.
   * Baseline: False (Not supported in all major browser)
   */
  "glyph-orientation-vertical"?: "auto";

  /**
   * The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid?: string;

  /**
   * Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.
   * Syntax: <grid-line> [ / <grid-line> ]{0,3}
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  "grid-area"?: "auto" | "span" | string | number;

  /**
   * Specifies the size of implicitly created columns.
   * Syntax: <track-size>+
   * Baseline: High (Supported since 2020-07-28)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  "grid-auto-columns"?:
    | "min-content"
    | "max-content"
    | "auto"
    | "minmax()"
    | string
    | 0;

  /**
   * Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   * Syntax: [ row | column ] || dense
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  "grid-auto-flow"?: "row" | "column" | "dense";

  /**
   * Specifies the size of implicitly created rows.
   * Syntax: <track-size>+
   * Baseline: High (Supported since 2020-07-28)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  "grid-auto-rows"?:
    | "min-content"
    | "max-content"
    | "auto"
    | "minmax()"
    | string
    | 0;

  /**
   * Shorthand for 'grid-column-start' and 'grid-column-end'.
   * Syntax: <grid-line> [ / <grid-line> ]?
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  "grid-column"?: "auto" | "span" | string | number;

  /**
   * Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
   * Syntax: <grid-line>
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  "grid-column-end"?: "auto" | "span" | string | number;

  /**
   * Specifies the gutters between grid columns. Replaced by 'column-gap' property.
   */
  "grid-column-gap"?: string;

  /**
   * Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
   * Syntax: <grid-line>
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  "grid-column-start"?: "auto" | "span" | string | number;

  /**
   * Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.
   */
  "grid-gap"?: string;

  /**
   * Shorthand for 'grid-row-start' and 'grid-row-end'.
   * Syntax: <grid-line> [ / <grid-line> ]?
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  "grid-row"?: "auto" | "span" | string | number;

  /**
   * Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
   * Syntax: <grid-line>
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  "grid-row-end"?: "auto" | "span" | string | number;

  /**
   * Specifies the gutters between grid rows. Replaced by 'row-gap' property.
   */
  "grid-row-gap"?: string;

  /**
   * Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
   * Syntax: <grid-line>
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  "grid-row-start"?: "auto" | "span" | string | number;

  /**
   * Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.
   * Syntax: none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  "grid-template"?:
    | "none"
    | "min-content"
    | "max-content"
    | "auto"
    | "subgrid"
    | "minmax()"
    | "repeat()"
    | string
    | 0;

  /**
   * Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.
   * Syntax: none | <string>+
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  "grid-template-areas"?: "none" | string;

  /**
   * specifies, as a space-separated track list, the line names and track sizing functions of the grid.
   * Syntax: none | <track-list> | <auto-track-list> | subgrid <line-name-list>?
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  "grid-template-columns"?:
    | "none"
    | "min-content"
    | "max-content"
    | "auto"
    | "subgrid"
    | "minmax()"
    | "repeat()"
    | string
    | 0;

  /**
   * specifies, as a space-separated track list, the line names and track sizing functions of the grid.
   * Syntax: none | <track-list> | <auto-track-list> | subgrid <line-name-list>?
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  "grid-template-rows"?:
    | "none"
    | "min-content"
    | "max-content"
    | "auto"
    | "subgrid"
    | "minmax()"
    | "repeat()"
    | string
    | 0;

  /**
   * The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  "hanging-punctuation"?: string;

  /**
   * Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.
   * Syntax: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height?: "auto" | "fit-content" | "max-content" | "min-content" | string | 0;

  /**
   * A hyphenate character used at the end of a line.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  "hyphenate-character"?: string;

  /**
   * The hyphenate-limit-chars CSS property specifies the minimum word length to allow hyphenation of words as well as the minimum number of characters before and after the hyphen.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  "hyphenate-limit-chars"?: string;

  /**
   * Controls whether hyphenation is allowed to create more break opportunities within a line of text.
   * Syntax: none | manual | auto
   * Baseline: Low (Supported since 2023-09-18)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens?: "auto" | "manual" | "none";

  /**
   * Specifies an orthogonal rotation to be applied to an image before it is laid out.
   * Syntax: from-image | <angle> | [ <angle>? flip ]
   * Baseline: High (Supported since 2020-04-13)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  "image-orientation"?: "flip" | "from-image" | string;

  /**
   * Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.
   * Syntax: auto | crisp-edges | pixelated | smooth
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  "image-rendering"?:
    | "auto"
    | "crisp-edges"
    | "-moz-crisp-edges"
    | "optimizeQuality"
    | "optimizeSpeed"
    | "pixelated";

  /**
   * The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.
   */
  "image-resolution"?: string;

  /**
   * Controls the state of the input method editor for text fields.
   * Syntax: auto | normal | active | inactive | disabled
   * Baseline: False (Not supported in all major browser)
   */
  "ime-mode"?: "active" | "auto" | "disabled" | "inactive" | "normal";

  /**
   * The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  "initial-letter"?: string;

  /**
   * The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.
   */
  "initial-letter-align"?: string;

  /**
   * Size of an element in the direction specified by 'writing-mode'.
   * Syntax: <'width'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  "inline-size"?: "auto" | string | 0;

  /**
   * The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset?: string;

  /**
   * The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  "inset-block"?: string;

  /**
   * The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  "inset-block-end"?: string;

  /**
   * The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  "inset-block-start"?: string;

  /**
   * The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  "inset-inline"?: string;

  /**
   * The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  "inset-inline-end"?: string;

  /**
   * The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  "inset-inline-start"?: string;

  /**
   * The interpolate-size CSS property allows you to enable animations and transitions between a <length-percentage> value and an intrinsic size value such as auto, fit-content, or max-content.
   * Syntax: numeric-only | allow-keywords
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  "interpolate-size"?: "numeric-only" | "allow-keywords";

  /**
   * In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.
   * Syntax: auto | isolate
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation?: "auto" | "isolate";

  /**
   * Aligns flex items along the main axis of the current line of the flex container.
   * Syntax: normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  "justify-content"?:
    | "center"
    | "start"
    | "end"
    | "left"
    | "right"
    | "safe"
    | "unsafe"
    | "stretch"
    | "space-evenly"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | string;

  /**
   * Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis
   * Syntax: normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center
   * Baseline: High (Supported since 2016-07-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  "justify-items"?:
    | "auto"
    | "normal"
    | "end"
    | "start"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "center"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe"
    | "unsafe"
    | "legacy"
    | string;

  /**
   * Defines the way of justifying a box inside its container along the appropriate axis.
   * Syntax: auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | anchor-center
   * Baseline: High (Supported since 2017-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  "justify-self"?:
    | "auto"
    | "normal"
    | "end"
    | "start"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "center"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "save"
    | "unsave"
    | string;

  /**
   * Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.
   */
  kerning?: "auto" | 0;

  /**
   * Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.
   * Syntax: auto | <length-percentage> | <anchor()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left?: "auto" | string | 0;

  /**
   * Specifies the minimum, maximum, and optimal spacing between grapheme clusters.
   * Syntax: normal | <length>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  "letter-spacing"?: "normal" | string | 0;

  /**
   * Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  "lighting-color"?: string;

  /**
   * Specifies what set of line breaking restrictions are in effect within the element.
   * Syntax: auto | loose | normal | strict | anywhere
   * Baseline: High (Supported since 2020-07-28)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  "line-break"?: "auto" | "loose" | "normal" | "strict" | "anywhere";

  /**
   * The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  "line-clamp"?: string;

  /**
   * Determines the block-progression dimension of the text content area of an inline box.
   * Syntax: normal | <number> | <length> | <percentage>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  "line-height"?: "normal" | string | 0;

  /**
   * The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.
   */
  "line-height-step"?: string;

  /**
   * Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'
   * Syntax: <'list-style-type'> || <'list-style-position'> || <'list-style-image'>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  "list-style"?:
    | "armenian"
    | "circle"
    | "decimal"
    | "decimal-leading-zero"
    | "disc"
    | "georgian"
    | "inside"
    | "lower-alpha"
    | "lower-greek"
    | "lower-latin"
    | "lower-roman"
    | "none"
    | "outside"
    | "square"
    | "symbols()"
    | "upper-alpha"
    | "upper-latin"
    | "upper-roman"
    | "url()"
    | string;

  /**
   * Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.
   * Syntax: <image> | none
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  "list-style-image"?: "none" | string;

  /**
   * Specifies the position of the '::marker' pseudo-element's box in the list item.
   * Syntax: inside | outside
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  "list-style-position"?: "inside" | "outside";

  /**
   * Used to construct the default contents of a list item's marker
   * Syntax: <counter-style> | <string> | none
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  "list-style-type"?:
    | "armenian"
    | "circle"
    | "decimal"
    | "decimal-leading-zero"
    | "disc"
    | "georgian"
    | "lower-alpha"
    | "lower-greek"
    | "lower-latin"
    | "lower-roman"
    | "none"
    | "square"
    | "symbols()"
    | "upper-alpha"
    | "upper-latin"
    | "upper-roman"
    | string;

  /**
   * Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.
   * Syntax: <'margin-top'>{1,4}
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin?: "auto" | string | 0;

  /**
   * The margin-block CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  "margin-block"?: string;

  /**
   * Logical 'margin-bottom'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * Syntax: <'margin-top'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  "margin-block-end"?: "auto" | string | 0;

  /**
   * Logical 'margin-top'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * Syntax: <'margin-top'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  "margin-block-start"?: "auto" | string | 0;

  /**
   * Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
   * Syntax: <length-percentage> | auto | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  "margin-bottom"?: "auto" | string | 0;

  /**
   * The margin-inline CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  "margin-inline"?: string;

  /**
   * Logical 'margin-right'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * Syntax: <'margin-top'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  "margin-inline-end"?: "auto" | string | 0;

  /**
   * Logical 'margin-left'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * Syntax: <'margin-top'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  "margin-inline-start"?: "auto" | string | 0;

  /**
   * Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
   * Syntax: <length-percentage> | auto | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  "margin-left"?: "auto" | string | 0;

  /**
   * Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
   * Syntax: <length-percentage> | auto | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  "margin-right"?: "auto" | string | 0;

  /**
   * Shorthand property to set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
   * Syntax: <length-percentage> | auto | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  "margin-top"?: "auto" | string | 0;

  /**
   * The margin-trim property allows the container to trim the margins of its children where they adjoin the container’s edges.
   * Syntax: none | in-flow | all
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  "margin-trim"?: "none" | "in-flow" | "all";

  /**
   * Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given 'path' element or basic shape.
   * Syntax: none | <url>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker?: "none" | "url()" | string;

  /**
   * Specifies the marker that will be drawn at the last vertices of the given markable element.
   * Syntax: none | <url>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  "marker-end"?: "none" | "url()" | string;

  /**
   * Specifies the marker that will be drawn at all vertices except the first and last.
   * Syntax: none | <url>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  "marker-mid"?: "none" | "url()" | string;

  /**
   * Specifies the marker that will be drawn at the first vertices of the given markable element.
   * Syntax: none | <url>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  "marker-start"?: "none" | "url()" | string;

  /**
   * The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask?: string;

  /**
   * The mask-border CSS property lets you create a mask along the edge of an element's border.
   *
   * This property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  "mask-border"?: string;

  /**
   * The mask-border-mode CSS property specifies the blending mode used in a mask border.
   * Syntax: luminance | alpha
   */
  "mask-border-mode"?: "luminance" | "alpha";

  /**
   * The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  "mask-border-outset"?: string;

  /**
   * The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  "mask-border-repeat"?: string;

  /**
   * The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  "mask-border-slice"?: string;

  /**
   * The mask-border-source CSS property specifies the source image used to create an element's mask border.
   *
   * The mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  "mask-border-source"?: string;

  /**
   * The mask-border-width CSS property specifies the width of an element's mask border.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  "mask-border-width"?: string;

  /**
   * The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  "mask-clip"?: string;

  /**
   * The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  "mask-composite"?: string;

  /**
   * Sets the mask layer image of an element.
   * Syntax: <mask-reference>#
   * Baseline: Low (Supported since 2023-12-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  "mask-image"?: "none" | "url()" | string;

  /**
   * Indicates whether the mask layer image is treated as luminance mask or alpha mask.
   * Syntax: <masking-mode>#
   * Baseline: Low (Supported since 2023-12-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  "mask-mode"?: "alpha" | "auto" | "luminance" | string;

  /**
   * Specifies the mask positioning area.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  "mask-origin"?: string;

  /**
   * Specifies how mask layer images are positioned.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  "mask-position"?: string;

  /**
   * Specifies how mask layer images are tiled after they have been sized and positioned.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  "mask-repeat"?: string;

  /**
   * Specifies the size of the mask layer images.
   * Syntax: <bg-size>#
   * Baseline: Low (Supported since 2023-12-07)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  "mask-size"?: "auto" | "contain" | "cover" | string | 0;

  /**
   * Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.
   * Syntax: luminance | alpha
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  "mask-type"?: "alpha" | "luminance";

  /**
   * Describe a notion of "depth" for each element of a mathematical formula, with respect to the top-level container of that formula.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  "math-depth"?: string;

  /**
   * Used for positioning superscript during the layout of MathML scripted elements.
   * Syntax: normal | compact
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  "math-shift"?: "normal" | "compact";

  /**
   * The math-style property indicates whether MathML equations should render with normal or compact height.
   * Syntax: normal | compact
   * Baseline: Low (Supported since 2023-08-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  "math-style"?: "normal" | "compact";

  /**
   * Maximum size of an element in the direction opposite that of the direction specified by 'writing-mode'.
   * Syntax: <'max-width'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  "max-block-size"?: "none" | string | 0;

  /**
   * Allows authors to constrain content height to a certain range.
   * Syntax: none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  "max-height"?:
    | "none"
    | "fit-content"
    | "max-content"
    | "min-content"
    | string
    | 0;

  /**
   * Maximum size of an element in the direction specified by 'writing-mode'.
   * Syntax: <'max-width'>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  "max-inline-size"?: "none" | string | 0;

  /**
   * The max-lines property forces a break after a set number of lines
   */
  "max-lines"?: string;

  /**
   * Allows authors to constrain content width to a certain range.
   * Syntax: none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  "max-width"?:
    | "none"
    | "fit-content"
    | "max-content"
    | "min-content"
    | string
    | 0;

  /**
   * Minimal size of an element in the direction opposite that of the direction specified by 'writing-mode'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  "min-block-size"?: string;

  /**
   * Allows authors to constrain content height to a certain range.
   * Syntax: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  "min-height"?:
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | string
    | 0;

  /**
   * Minimal size of an element in the direction specified by 'writing-mode'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  "min-inline-size"?: string;

  /**
   * Allows authors to constrain content width to a certain range.
   * Syntax: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  "min-width"?:
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | string
    | 0;

  /**
   * Defines the formula that must be used to mix the colors with the backdrop.
   * Syntax: <blend-mode> | plus-darker | plus-lighter
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  "mix-blend-mode"?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | string;

  /**
   * Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.
   */
  motion?: "none" | "path()" | "auto" | "reverse" | 0;

  /**
   * A distance that describes the position along the specified motion path.
   */
  "motion-offset"?: string;

  /**
   * Specifies the motion path the element gets positioned at.
   */
  "motion-path"?: "none" | "path()";

  /**
   * Defines the direction of the element while positioning along the motion path.
   */
  "motion-rotation"?: "auto" | "reverse";

  /**
   * Provides an way to control directional focus navigation.
   */
  "nav-down"?: "auto" | "current" | "root";

  /**
   * Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').
   */
  "nav-index"?: "auto";

  /**
   * Provides an way to control directional focus navigation.
   */
  "nav-left"?: "auto" | "current" | "root";

  /**
   * Provides an way to control directional focus navigation.
   */
  "nav-right"?: "auto" | "current" | "root";

  /**
   * Provides an way to control directional focus navigation.
   */
  "nav-up"?: "auto" | "current" | "root";

  /**
   * Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
   * Syntax: fill | contain | cover | none | scale-down
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  "object-fit"?: "contain" | "cover" | "fill" | "none" | "scale-down";

  /**
   * Determines the alignment of the replaced element inside its box.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  "object-position"?: string;

  /**
   * Defines a rectangle as a viewable area (viewbox) within a replaced element, enabling the content of the replaced element to be zoomed or panned.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  "object-view-box"?: string;

  /**
   * The offset CSS property is a shorthand property for animating an element along a defined path.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset?: string;

  /**
   * Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  "offset-anchor"?: string;

  /**
   * Logical 'bottom'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   */
  "offset-block-end"?: "auto" | 0;

  /**
   * Logical 'top'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   */
  "offset-block-start"?: "auto" | 0;

  /**
   * The offset-distance CSS property specifies a position along an offset-path.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  "offset-distance"?: string;

  /**
   * Logical 'right'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   */
  "offset-inline-end"?: "auto" | 0;

  /**
   * Logical 'left'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   */
  "offset-inline-start"?: "auto" | 0;

  /**
   * The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.
   *
   * In this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  "offset-path"?: string;

  /**
   * Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  "offset-position"?: string;

  /**
   * The offset-rotate CSS property defines the direction of the element while positioning along the offset path.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  "offset-rotate"?: string;

  /**
   * Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity?: string;

  /**
   * Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order?: string;

  /**
   * Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans?: string;

  /**
   * Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.
   * Syntax: <'outline-width'> || <'outline-style'> || <'outline-color'>
   * Baseline: High (Supported since 2023-03-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline?: "auto" | "invert" | string | 0;

  /**
   * The color of the outline.
   * Syntax: auto | <color>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  "outline-color"?: "invert" | string;

  /**
   * Offset the outline and draw it beyond the border edge.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  "outline-offset"?: string;

  /**
   * Style of the outline.
   * Syntax: auto | <outline-line-style>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  "outline-style"?: "auto" | string;

  /**
   * Width of the outline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  "outline-width"?: string;

  /**
   * Shorthand for setting 'overflow-x' and 'overflow-y'.
   * Syntax: [ visible | hidden | clip | scroll | auto ]{1,2}
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow?:
    | "auto"
    | "hidden"
    | "-moz-hidden-unscrollable"
    | "scroll"
    | "visible";

  /**
   * The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts.
   * Syntax: auto | none
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  "overflow-anchor"?: "auto" | "none";

  /**
   * The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis.
   * Syntax: visible | hidden | clip | scroll | auto
   * Baseline: Low (Supported since 2025-09-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  "overflow-block"?: "visible" | "hidden" | "clip" | "scroll" | "auto";

  /**
   * The overflow-clip-margin CSS property determines how far outside its bounds an element with overflow: clip may be painted before being clipped.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  "overflow-clip-margin"?: string;

  /**
   * The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis.
   * Syntax: visible | hidden | clip | scroll | auto
   * Baseline: Low (Supported since 2025-09-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  "overflow-inline"?: "visible" | "hidden" | "clip" | "scroll" | "auto";

  /**
   * Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.
   * Syntax: normal | break-word | anywhere
   * Baseline: High (Supported since 2018-10-02)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  "overflow-wrap"?: "break-word" | "normal" | "anywhere";

  /**
   * Specifies the handling of overflow in the horizontal direction.
   * Syntax: visible | hidden | clip | scroll | auto
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  "overflow-x"?: "auto" | "hidden" | "scroll" | "visible";

  /**
   * Specifies the handling of overflow in the vertical direction.
   * Syntax: visible | hidden | clip | scroll | auto
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  "overflow-y"?: "auto" | "hidden" | "scroll" | "visible";

  /**
   * The overlay CSS property specifies whether an element appearing in the top layer (for example, a shown popover or modal {{htmlelement("dialog")}} element) is actually rendered in the top layer. This property is only relevant within a list of transition-property values, and only if allow-discrete is set as the transition-behavior.
   * Syntax: none | auto
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay?: "none" | "auto";

  /**
   * The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  "overscroll-behavior"?: string;

  /**
   * The overscroll-behavior-block CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
   * Syntax: contain | none | auto
   * Baseline: High (Supported since 2022-09-12)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  "overscroll-behavior-block"?: "contain" | "none" | "auto";

  /**
   * The overscroll-behavior-inline CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
   * Syntax: contain | none | auto
   * Baseline: High (Supported since 2022-09-12)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  "overscroll-behavior-inline"?: "contain" | "none" | "auto";

  /**
   * The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
   * Syntax: contain | none | auto
   * Baseline: High (Supported since 2022-09-12)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: "contain" | "none" | "auto";

  /**
   * The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
   * Syntax: contain | none | auto
   * Baseline: High (Supported since 2022-09-12)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: "contain" | "none" | "auto";

  /**
   * Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding?: string;

  /**
   * The padding-block CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  "padding-block"?: string;

  /**
   * Logical 'padding-bottom'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  "padding-block-end"?: string;

  /**
   * Logical 'padding-top'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  "padding-block-start"?: string;

  /**
   * Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  "padding-bottom"?: string;

  /**
   * The padding-inline CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  "padding-inline"?: string;

  /**
   * Logical 'padding-right'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  "padding-inline-end"?: string;

  /**
   * Logical 'padding-left'. Mapping depends on the parent element's 'writing-mode', 'direction', and 'text-orientation'.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  "padding-inline-start"?: string;

  /**
   * Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  "padding-left"?: string;

  /**
   * Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  "padding-right"?: string;

  /**
   * Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  "padding-top"?: string;

  /**
   * The page CSS property is used to specify the named page, a specific type of page defined by the @page at-rule.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page?: string;

  /**
   * Defines rules for page breaks after an element.
   * Syntax: auto | always | avoid | left | right | recto | verso
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  "page-break-after"?: "always" | "auto" | "avoid" | "left" | "right";

  /**
   * Defines rules for page breaks before an element.
   * Syntax: auto | always | avoid | left | right | recto | verso
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  "page-break-before"?: "always" | "auto" | "avoid" | "left" | "right";

  /**
   * Defines rules for page breaks inside an element.
   * Syntax: auto | avoid
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  "page-break-inside"?: "auto" | "avoid";

  /**
   * Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.
   * Syntax: normal | [ fill || stroke || markers ]
   * Baseline: Low (Supported since 2024-03-22)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  "paint-order"?: "fill" | "markers" | "normal" | "stroke";

  /**
   * Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
   * Syntax: none | <length>
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective?: "none" | string | 0;

  /**
   * Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  "perspective-origin"?: string;

  /**
   * The place-content CSS shorthand property sets both the align-content and justify-content properties.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  "place-content"?: string;

  /**
   * The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  "place-items"?: string;

  /**
   * The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  "place-self"?: string;

  /**
   * Specifies under what circumstances a given element can be the target element for a pointer event.
   * Syntax: auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  "pointer-events"?:
    | "all"
    | "fill"
    | "none"
    | "painted"
    | "stroke"
    | "visible"
    | "visibleFill"
    | "visiblePainted"
    | "visibleStroke";

  /**
   * The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
   * Syntax: static | relative | absolute | sticky | fixed
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position?:
    | "absolute"
    | "fixed"
    | "-ms-page"
    | "relative"
    | "static"
    | "sticky"
    | "-webkit-sticky";

  /**
   * The position-anchor property defines the default anchor specifier for all anchor functions on the element, allowing multiple elements to use the same set of anchor functions (and position options lists!) while changing which anchor element each is referring to.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  "position-anchor"?: string;

  /**
   * The position-area CSS property enables an anchor-positioned element to be positioned relative to the edges of its associated anchor element by placing the positioned element on one or more tiles of an implicit 3x3 grid, where the anchoring element is the center cell.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  "position-area"?: string;

  /**
   * This shorthand sets both position-try-options and position-try-order. If <'position-try-order'> is omitted, it’s set to the property’s initial value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  "position-try"?: string;

  /**
   * The position-try-fallbacks CSS property enables you to specify a list of one or more alternative position try fallback options for anchor-positioned elements to be placed relative to their associated anchor elements. When the element would otherwise overflow its inset-modified containing block, the browser will try placing the positioned element in these different fallback positions, in the order provided, until it finds a value that stops it from overflowing its container or the viewport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  "position-try-fallbacks"?: string;

  /**
   * This property specifies the order in which the position options list will be tried.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  "position-try-order"?: string;

  /**
   * There are times when an element’s anchors are not appropriate for positioning the element with, and it would be better to simply not display the element at all. position-visibility provides several conditions where this could be the case.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  "position-visibility"?: string;

  /**
   * Defines what optimization the user agent is allowed to do when adjusting the appearance for an output device.
   * Syntax: economy | exact
   * Baseline: Low (Supported since 2025-05-01)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  "print-color-adjust"?: "economy" | "exact";

  /**
   * Specifies quotation marks for any number of embedded quotations.
   * Syntax: none | auto | [ <string> <string> ]+
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes?: "none" | string;

  /**
   * The r CSS property defines the radius of a circle. It can only be used with the SVG circle element. If present, it overrides the circle's r attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r?: string;

  /**
   * Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.
   * Syntax: none | both | horizontal | vertical | block | inline
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize?: "both" | "horizontal" | "none" | "vertical";

  /**
   * Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.
   * Syntax: auto | <length-percentage> | <anchor()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right?: "auto" | string | 0;

  /**
   * The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate?: string;

  /**
   * The row-gap CSS property specifies the gutter between grid rows.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  "row-gap"?: string;

  /**
   * Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.
   * Syntax: start | center | space-between | space-around
   * Baseline: Low (Supported since 2024-12-11)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  "ruby-align"?:
    | "auto"
    | "center"
    | "distribute-letter"
    | "distribute-space"
    | "left"
    | "line-edge"
    | "right"
    | "start"
    | "space-between"
    | "space-around";

  /**
   * This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.
   * Syntax: separate | collapse | auto
   */
  "ruby-merge"?: "separate" | "collapse" | "auto";

  /**
   * Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
   * Syntax: auto | none
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  "ruby-overhang"?: "auto" | "end" | "none" | "start";

  /**
   * Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.
   * Syntax: [ alternate || [ over | under ] ] | inter-character
   * Baseline: Low (Supported since 2024-12-11)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  "ruby-position"?: "after" | "before" | "inline" | "right";

  /**
   * Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
   */
  "ruby-span"?: "attr(x)" | "none";

  /**
   * The rx CSS property defines the x-axis, or horizontal, radius of an SVG ellipse and the horizontal curve of the corners of an SVG rect rectangle. If present, it overrides the shape's rx attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx?: string;

  /**
   * The ry CSS property defines the y-axis, or vertical, radius of an SVG ellipse and the vertical curve of the corners of an SVG rect rectangle. If present, it overrides the shape's ry attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry?: string;

  /**
   * The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale?: string;

  /**
   * Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.
   * Syntax: auto | smooth
   * Baseline: High (Supported since 2022-03-14)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  "scroll-behavior"?: "auto" | "smooth";

  /**
   * Syntax: none | nearest
   * Baseline: False (Not supported in all major browser)
   */
  "scroll-initial-target"?: "none" | "nearest";

  /**
   * The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  "scroll-margin"?: string;

  /**
   * The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  "scroll-margin-block"?: string;

  /**
   * The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  "scroll-margin-block-end"?: string;

  /**
   * The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  "scroll-margin-block-start"?: string;

  /**
   * The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  "scroll-margin-bottom"?: string;

  /**
   * The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  "scroll-margin-inline"?: string;

  /**
   * The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  "scroll-margin-inline-end"?: string;

  /**
   * The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  "scroll-margin-inline-start"?: string;

  /**
   * The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  "scroll-margin-left"?: string;

  /**
   * The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  "scroll-margin-right"?: string;

  /**
   * The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  "scroll-margin-top"?: string;

  /**
   * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  "scroll-padding"?: string;

  /**
   * The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  "scroll-padding-block"?: string;

  /**
   * The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  "scroll-padding-block-end"?: string;

  /**
   * The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  "scroll-padding-block-start"?: string;

  /**
   * The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  "scroll-padding-bottom"?: string;

  /**
   * The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  "scroll-padding-inline"?: string;

  /**
   * The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  "scroll-padding-inline-end"?: string;

  /**
   * The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  "scroll-padding-inline-start"?: string;

  /**
   * The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  "scroll-padding-left"?: string;

  /**
   * The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  "scroll-padding-right"?: string;

  /**
   * The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  "scroll-padding-top"?: string;

  /**
   * The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  "scroll-snap-align"?: string;

  /**
   * Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container's snap-destination for the respective axis.
   * Syntax: none | <position>#
   */
  "scroll-snap-coordinate"?: "none" | string | 0;

  /**
   * Define the x and y coordinate within the scroll container's visual viewport which element snap points will align with.
   */
  "scroll-snap-destination"?: string;

  /**
   * Defines the positioning of snap points along the x axis of the scroll container it is applied to.
   * Syntax: none | repeat( <length-percentage> )
   */
  "scroll-snap-points-x"?: "none" | "repeat()" | string;

  /**
   * Defines the positioning of snap points along the y axis of the scroll container it is applied to.
   * Syntax: none | repeat( <length-percentage> )
   */
  "scroll-snap-points-y"?: "none" | "repeat()" | string;

  /**
   * The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   * Syntax: normal | always
   * Baseline: High (Supported since 2022-07-26)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  "scroll-snap-stop"?: "normal" | "always";

  /**
   * Defines how strictly snap points are enforced on the scroll container.
   * Syntax: none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
   * Baseline: High (Supported since 2022-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  "scroll-snap-type"?: "none" | "mandatory" | "proximity";

  /**
   * The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
   *
   * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
   * Syntax: none | mandatory | proximity
   */
  "scroll-snap-type-x"?: "none" | "mandatory" | "proximity";

  /**
   * The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
   *
   * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
   * Syntax: none | mandatory | proximity
   */
  "scroll-snap-type-y"?: "none" | "mandatory" | "proximity";

  /**
   * Defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  "scroll-timeline"?: string;

  /**
   * Specifies the scrollbar that will be used to provide the timeline for a scroll-timeline animation
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  "scroll-timeline-axis"?: string;

  /**
   * Defines a name that can be used to identify an element as the source of a scroll-timeline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  "scroll-timeline-name"?: string;

  /**
   * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
   */
  "scrollbar-3dlight-color"?: string;

  /**
   * Determines the color of the arrow elements of a scroll arrow.
   */
  "scrollbar-arrow-color"?: string;

  /**
   * Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
   */
  "scrollbar-base-color"?: string;

  /**
   * The scrollbar-color CSS property sets the color of the scrollbar track and thumb.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  "scrollbar-color"?: string;

  /**
   * Determines the color of the gutter of a scroll bar.
   */
  "scrollbar-darkshadow-color"?: string;

  /**
   * Determines the color of the scroll box and scroll arrows of a scroll bar.
   */
  "scrollbar-face-color"?: string;

  /**
   * The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  "scrollbar-gutter"?: string;

  /**
   * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
   */
  "scrollbar-highlight-color"?: string;

  /**
   * Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
   */
  "scrollbar-shadow-color"?: string;

  /**
   * Determines the color of the track element of a scroll bar.
   */
  "scrollbar-track-color"?: string;

  /**
   * The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
   * Syntax: auto | thin | none
   * Baseline: Low (Supported since 2024-12-11)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  "scrollbar-width"?: "auto" | "thin" | "none";

  /**
   * Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  "shape-image-threshold"?: string;

  /**
   * Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  "shape-margin"?: string;

  /**
   * Specifies an orthogonal rotation to be applied to an image before it is laid out.
   * Syntax: none | [ <shape-box> || <basic-shape> ] | <image>
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  "shape-outside"?: "margin-box" | "none" | string;

  /**
   * Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.
   * Syntax: auto | optimizeSpeed | crispEdges | geometricPrecision
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  "shape-rendering"?:
    | "auto"
    | "crispEdges"
    | "geometricPrecision"
    | "optimizeSpeed";

  /**
   * Indicates what color to use at that gradient stop.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  "stop-color"?: string;

  /**
   * Defines the opacity of a given gradient stop.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  "stop-opacity"?: string;

  /**
   * Paints along the outline of the given graphical element.
   * Syntax: <paint>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke?: "url()" | "none" | string;

  "stroke-color"?: string;

  /**
   * Controls the pattern of dashes and gaps used to stroke paths.
   * Syntax: none | <dasharray>
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  "stroke-dasharray"?: "none" | string | 0;

  /**
   * Specifies the distance into the dash pattern to start the dash.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  "stroke-dashoffset"?: string;

  /**
   * Specifies the shape to be used at the end of open subpaths when they are stroked.
   * Syntax: butt | round | square
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  "stroke-linecap"?: "butt" | "round" | "square";

  /**
   * Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
   * Syntax: miter | miter-clip | round | bevel | arcs
   * Baseline: High (Supported since 2017-04-05)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  "stroke-linejoin"?: "bevel" | "miter" | "round";

  /**
   * When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  "stroke-miterlimit"?: string;

  /**
   * Specifies the opacity of the painting operation used to stroke the current object.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  "stroke-opacity"?: string;

  /**
   * Specifies the width of the stroke on the current object.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  "stroke-width"?: string;

  /**
   * Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  "tab-size"?: string;

  /**
   * Controls the algorithm used to lay out the table cells, rows, and columns.
   * Syntax: auto | fixed
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  "table-layout"?: "auto" | "fixed";

  /**
   * Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.
   * Syntax: start | end | left | right | center | justify | match-parent
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  "text-align"?: "center" | "end" | "justify" | "left" | "right" | "start";

  /**
   * Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
   * Syntax: auto | start | end | left | right | center | justify
   * Baseline: High (Supported since 2022-09-12)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  "text-align-last"?: "auto" | "center" | "justify" | "left" | "right";

  /**
   * Used to align (start-, middle- or end-alignment) a string of text relative to a given point.
   * Syntax: start | middle | end
   * Baseline: High (Supported since 2016-08-02)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  "text-anchor"?: "end" | "middle" | "start";

  /**
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  "text-autospace"?: string;

  /**
   * The text-box CSS property is a shorthand that corresponds to the text-box-trim and text-box-edge properties, which together specify the amount of space to trim from the block-start edge and block-end edge of a text element's block container.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  "text-box"?: string;

  /**
   * The text-box-edge CSS property specifies an amount of space to trim from a text element's block container.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  "text-box-edge"?: string;

  /**
   * The text-box-trim CSS property specifies which of the over and under edges of text content to trim from a text element's block container.
   * Syntax: none | trim-start | trim-end | trim-both
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  "text-box-trim"?: "none" | "trim-start" | "trim-end" | "trim-both";

  /**
   * The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * This is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  "text-combine-upright"?: string;

  /**
   * Decorations applied to font used for an element's text.
   * Syntax: <'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  "text-decoration"?:
    | "dashed"
    | "dotted"
    | "double"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "underline"
    | "wavy"
    | string;

  /**
   * Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  "text-decoration-color"?: string;

  /**
   * Specifies what line decorations, if any, are added to the element.
   * Syntax: none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  "text-decoration-line"?: "line-through" | "none" | "overline" | "underline";

  /**
   * The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  "text-decoration-skip"?: string;

  /**
   * The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   * Syntax: auto | all | none
   * Baseline: High (Supported since 2022-03-14)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: "auto" | "all" | "none";

  /**
   * Specifies the line style for underline, line-through and overline text decoration.
   * Syntax: solid | double | dotted | dashed | wavy
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  "text-decoration-style"?:
    | "dashed"
    | "dotted"
    | "double"
    | "none"
    | "solid"
    | "wavy";

  /**
   * The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  "text-decoration-thickness"?: string;

  /**
   * The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  "text-emphasis"?: string;

  /**
   * The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  "text-emphasis-color"?: string;

  /**
   * The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  "text-emphasis-position"?: string;

  /**
   * The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  "text-emphasis-style"?: string;

  /**
   * Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  "text-indent"?: string;

  /**
   * Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
   * Syntax: auto | inter-character | inter-word | none
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  "text-justify"?:
    | "auto"
    | "distribute"
    | "distribute-all-lines"
    | "inter-cluster"
    | "inter-ideograph"
    | "inter-word"
    | "kashida"
    | "newspaper";

  /**
   * Specifies the orientation of text within a line.
   * Syntax: mixed | upright | sideways
   * Baseline: High (Supported since 2020-09-16)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  "text-orientation"?: "sideways" | "sideways-right" | "upright";

  /**
   * Text can overflow for example when it is prevented from wrapping.
   * Syntax: [ clip | ellipsis | <string> ]{1,2}
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  "text-overflow"?: "clip" | "ellipsis" | string;

  /**
   * The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The 'text-rendering' property provides these hints.
   * Syntax: auto | optimizeSpeed | optimizeLegibility | geometricPrecision
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  "text-rendering"?:
    | "auto"
    | "geometricPrecision"
    | "optimizeLegibility"
    | "optimizeSpeed";

  /**
   * Enables shadow effects to be applied to the text of the element.
   * Syntax: none | <shadow-t>#
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  "text-shadow"?: "none" | string | 0;

  /**
   * The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  "text-size-adjust"?: string;

  /**
   * The text-spacing-trim CSS property controls the internal spacing set on Chinese/Japanese/Korean (CJK) punctuation characters between adjacent characters (kerning) and at the start or end of text lines.
   * Syntax: space-all | normal | space-first | trim-start
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  "text-spacing-trim"?: "space-all" | "normal" | "space-first" | "trim-start";

  /**
   * Controls capitalization effects of an element's text.
   * Syntax: none | [ capitalize | uppercase | lowercase ] || full-width || full-size-kana | math-auto
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  "text-transform"?: "capitalize" | "lowercase" | "none" | "uppercase";

  /**
   * The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  "text-underline-offset"?: string;

  /**
   * Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
   * Syntax: auto | from-font | [ under || [ left | right ] ]
   * Baseline: High (Supported since 2020-07-28)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  "text-underline-position"?: "above" | "auto" | "below";

  /**
   * The text-wrap CSS property controls how text inside an element is wrapped.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  "text-wrap"?: string;

  /**
   * The text-wrap-mode CSS property controls whether the text inside an element is wrapped. The different values provide alternate ways of wrapping the content of a block element. It can also be set, and reset, using the {{CSSXRef("text-wrap")}} shorthand.
   * Syntax: wrap | nowrap
   * Baseline: Low (Supported since 2024-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  "text-wrap-mode"?: "wrap" | "nowrap";

  /**
   * The text-wrap-style CSS property controls how text inside an element is wrapped. The different values provide alternate ways of wrapping the content of a block element. It can also be set, and reset, using the {{CSSXRef("text-wrap")}} shorthand.
   * Syntax: auto | balance | stable | pretty
   * Baseline: Low (Supported since 2024-10-17)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  "text-wrap-style"?: "auto" | "balance" | "stable" | "pretty";

  /**
   * The timeline-scope CSS property modifies the scope of a named animation timeline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  "timeline-scope"?: string;

  /**
   * Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.
   * Syntax: auto | <length-percentage> | <anchor()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top?: "auto" | string | 0;

  /**
   * Determines whether touch input may trigger default behavior supplied by user agent.
   * Syntax: auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation
   * Baseline: High (Supported since 2019-09-19)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  "touch-action"?:
    | "auto"
    | "cross-slide-x"
    | "cross-slide-y"
    | "double-tap-zoom"
    | "manipulation"
    | "none"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom";

  /**
   * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
   * Syntax: none | <transform-list>
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform?:
    | "matrix()"
    | "matrix3d()"
    | "none"
    | "perspective()"
    | "rotate()"
    | "rotate3d()"
    | "rotateX('angle')"
    | "rotateY('angle')"
    | "rotateZ('angle')"
    | "scale()"
    | "scale3d()"
    | "scaleX()"
    | "scaleY()"
    | "scaleZ()"
    | "skew()"
    | "skewX()"
    | "skewY()"
    | "translate()"
    | "translate3d()"
    | "translateX()"
    | "translateY()"
    | "translateZ()"
    | string;

  /**
   * The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.
   * Syntax: content-box | border-box | fill-box | stroke-box | view-box
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  "transform-box"?:
    | "content-box"
    | "border-box"
    | "fill-box"
    | "stroke-box"
    | "view-box";

  /**
   * Establishes the origin of transformation for an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  "transform-origin"?: string;

  /**
   * Defines how nested elements are rendered in 3D space.
   * Syntax: flat | preserve-3d
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  "transform-style"?: "flat" | "preserve-3d";

  /**
   * Shorthand property combines four of the transition properties into a single property.
   * Syntax: <single-transition>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition?: "all" | "none" | string;

  /**
   * The transition-behavior CSS property specifies whether transitions will be started for properties whose animation behavior is discrete.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  "transition-behavior"?: string;

  /**
   * Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  "transition-delay"?: string;

  /**
   * Specifies how long the transition from the old value to the new value should take.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  "transition-duration"?: string;

  /**
   * Specifies the name of the CSS property to which the transition is applied.
   * Syntax: none | <single-transition-property>#
   * Baseline: High (Supported since 2015-09-30)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  "transition-property"?: "all" | "none" | string;

  /**
   * Describes how the intermediate values used during a transition will be calculated.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  "transition-timing-function"?: string;

  /**
   * The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate?: string;

  /**
   * The level of embedding with respect to the bidirectional algorithm.
   * Syntax: normal | embed | isolate | bidi-override | isolate-override | plaintext
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  "unicode-bidi"?:
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";

  /**
   * Controls the appearance of selection.
   * Syntax: auto | text | none | all
   * Baseline: False (Not supported in all major browser)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  "user-select"?: "all" | "auto" | "contain" | "none" | "text";

  /**
   * The vector-effect CSS property suppresses specific transformation effects in SVG, thus permitting effects like a road on a map staying the same width no matter how the map is zoomed, or allowing a diagram key to retain its position and size regardless of other transforms. It can only be used with SVG elements that accept the vector-effect attribute. When used, the CSS value overrides any values of the element's vector-effect attribute.
   * Syntax: none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  "vector-effect"?:
    | "none"
    | "non-scaling-stroke"
    | "non-scaling-size"
    | "non-rotation"
    | "fixed-position";

  /**
   * Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.
   * Syntax: baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  "vertical-align"?:
    | "auto"
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | "-webkit-baseline-middle"
    | string
    | 0;

  /**
   * The view-timeline CSS shorthand property is used to define a named view progress timeline, which is progressed through based on the change in visibility of an element (known as the subject) inside a scrollable element (scroller). view-timeline is set on the subject.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  "view-timeline"?: string;

  /**
   * The view-timeline-axis CSS property is used to specify the scrollbar direction that will be used to provide the timeline for a named view progress timeline animation, which is progressed through based on the change in visibility of an element (known as the subject) inside a scrollable element (scroller). view-timeline-axis is set on the subject. See CSS scroll-driven animations for more details.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  "view-timeline-axis"?: string;

  /**
   * The view-timeline-inset CSS property is used to specify one or two values representing an adjustment to the position of the scrollport (see Scroll container for more details) in which the subject element of a named view progress timeline animation is deemed to be visible. Put another way, this allows you to specify start and/or end inset (or outset) values that offset the position of the timeline.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  "view-timeline-inset"?: string;

  /**
   * The view-timeline-name CSS property is used to define the name of a named view progress timeline, which is progressed through based on the change in visibility of an element (known as the subject) inside a scrollable element (scroller). view-timeline is set on the subject.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  "view-timeline-name"?: string;

  /**
   * The view-transition-class CSS property provides the selected elements with an identifying class (a custom-ident), providing an additional method of styling the view transitions for those elements.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  "view-transition-class"?: string;

  /**
   * The view-transition-name CSS property provides the selected element with a distinct identifying name (a custom-ident) and causes it to participate in a separate view transition from the root view transition — or no view transition if the none value is specified.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  "view-transition-name"?: string;

  /**
   * Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the 'display' property to 'none' to suppress box generation altogether).
   * Syntax: visible | hidden | collapse
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility?: "collapse" | "hidden" | "visible";

  /**
   * Specifies how whitespace is handled in an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  "white-space"?: string;

  /**
   * The white-space-collapse CSS property controls how white space inside an element is collapsed.
   * Syntax: collapse | preserve | preserve-breaks | preserve-spaces | break-spaces
   * Baseline: Low (Supported since 2024-03-19)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  "white-space-collapse"?:
    | "collapse"
    | "preserve"
    | "preserve-breaks"
    | "preserve-spaces"
    | "break-spaces";

  /**
   * Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows?: string;

  /**
   * Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.
   * Syntax: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width?: "auto" | "fit-content" | "max-content" | "min-content" | string | 0;

  /**
   * Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.
   * Syntax: auto | <animateable-feature>#
   * Baseline: High (Supported since 2020-01-15)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  "will-change"?: "auto" | "contents" | "scroll-position" | string;

  /**
   * Specifies line break opportunities for non-CJK scripts.
   * Syntax: normal | break-all | keep-all | break-word | auto-phrase
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  "word-break"?: "break-all" | "keep-all" | "normal";

  /**
   * Specifies additional spacing between "words".
   * Syntax: normal | <length>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  "word-spacing"?: "normal" | string | 0;

  /**
   * Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
   * Syntax: normal | break-word
   */
  "word-wrap"?: "break-word" | "normal";

  /**
   * This is a shorthand property for both 'direction' and 'block-progression'.
   * Syntax: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr
   * Baseline: High (Supported since 2017-03-27)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  "writing-mode"?:
    | "horizontal-tb"
    | "sideways-lr"
    | "sideways-rl"
    | "vertical-lr"
    | "vertical-rl";

  /**
   * The x CSS property defines the x-axis coordinate of the top left corner of the SVG rect shape, image image, foreignObject viewport or nested svg viewport relative to the nearest <svg> ancestor's user coordinate system. If present, it overrides the element's x attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x?: string;

  /**
   * The y CSS property defines the y-axis coordinate of the top left corner of the SVG rect shape, image image, foreignObject viewport and nested svg viewport relative to the nearest <svg> ancestor's user coordinate system. If present, it overrides the element's y attribute.
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y?: string;

  /**
   * For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.
   * Syntax: auto | <integer>
   * Baseline: High (Supported since 2015-07-29)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  "z-index"?: "auto" | string | number;

  /**
   * Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.
   * Syntax: normal | reset | <number [0,∞]> || <percentage [0,∞]>
   * Baseline: Low (Supported since 2024-05-14)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom?: "normal" | string | number;
}
