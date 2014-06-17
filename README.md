# o-layers

This module provides a namespace for managing modules that make use of the z-axis, providing events, css classes and coding conventions that modules *must* use to interact with other modules that use the z-axis

## Terminology

* **Layer** refers to the owned DOM, or portion of owned DOM, of any module that makes use of the z-axis
* **Layer context** refers to an area of the DOM defining a context for layers (as defined below under `o-layers__classes`)

## Classes

### `o-layers__context`

This class should be added to any element which defines an area where every layer lying within it should only be concerned with other layers if they also lie within it. e.g. Within an interactive graphic any popups only need concern themselves with the state of other popups which also overlay the same graphic; they can safely disregard popups overlaying a different graphic.

A layer must either

* be a descendant of an element with the class `o-layers__context` and *must not* overlap any part of the page not contained within this element
* not be a descendant of any element with the class `o-layers__context` (in which case `document.body` provides the default layer context)

## Events

The following custom events *must* be fired on a layer's closest ancestor with the class `o-layers__context`, or on `document.body` if such an element doesn't exist. The `Event.details` property define all the properties from the list below that are truthy for the given layer

* *zIndex* - the css z-index of the layer
* *transform* - Array of css transforms being applied to the layer
* *animationDelay* - Any delay between firing the event and cmpletion of the layer's state change as a result of css transitions or similar
* *el* - Reference to the layer's DOM node

### `oLayers.new`

This should be fired whenever a new layer is added to the page, immediately *before* it is added to the DOM/displayed. 

<<<<<<< HEAD
### `oLayers.close`
=======
### `oLayers.closed`
>>>>>>> fd0a90309c10aeb4687b99fb499a07fc37dd4c70

This should be fired whenever a layer is removed from the page, immediately *after* it is removed from the DOM/hidden.

### `oLayers.closeAll`

This should be fired to close all layers within a given context

## Coding conventions

Any module which controls one or more layers must implement the following patterns

* Listen for the events `oLayers.new` and `oLayers.closeAll` on the layer context of each of its layers and react to these events by closing any layers it owns which share the same context

