# [FPSMeter](http://darsa.in/fpsmeter)

Simple JavaScript library for sexy, fast, and themable FPS meter. It can measure:

- frames per second
- number of milliseconds between frames
- number of milliseconds it takes to render one frame

FPSMeter uses `performance.now()` to more accurately measure rendering timing, with a fallback to `+new Date()`.

The actual display rendering is optimized and chained to requestAnimationFrame (with a polyfill for older browsers), so
it should be as smooth and as fast as possible. It also supports multiple instances on one page, has show/hide methods
that also pause the rendering, and color heatmaps that make themes even more pretty!

#### Dependencies

None.

#### Compatibility

Works in IE7+ and all modern browsers.

### [Changelog](https://github.com/darsain/fpsmeter/wiki/Changelog)

FPSMeter upholds the [Semantic Versioning Specification](http://semver.org/).

## Download

Latest stable release:

- [Production `fpsmeter.min.js`](https://raw.github.com/darsain/fpsmeter/master/dist/fpsmeter.min.js) - 7KB, 3KB gzipped
- [Development `fpsmeter.js`](https://raw.github.com/darsain/fpsmeter/master/dist/fpsmeter.js) - 18KB

When isolating issues on jsfiddle, you can use this URL:

- [http://darsain.github.io/fpsmeter/js/fpsmeter.min.js](http://darsain.github.io/fpsmeter/js/fpsmeter.min.js)

## Documentation

- **[Calling](https://github.com/darsain/fpsmeter/wiki/Calling)** - how to call FPSMeter, plus usage examples
- **[Options](https://github.com/darsain/fpsmeter/wiki/Options)** - all available options
- **[Properties](https://github.com/darsain/fpsmeter/wiki/Properties)** - accessible FPSMeter object properties
- **[Methods](https://github.com/darsain/fpsmeter/wiki/Methods)** - all available methods, and how to use them
- **[Theming](https://github.com/darsain/fpsmeter/wiki/Theming)** - how to theme FPSMeter

## Contributing

Please, read the [Contributing Guidelines](CONTRIBUTING.md) for this project.
