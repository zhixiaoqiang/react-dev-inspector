# Changelog


## [1.6.0](https://github.com/zthxxx/react-dev-inspector/compare/v1.5.3...v1.6.0) (2021-04-27)


### Features

* support ice.js  and docs ([6ea0776](https://github.com/zthxxx/react-dev-inspector/commit/6ea0776e928abb7e00df0fd2be5b66b7cf7e2d7a))



## [1.5.3](https://github.com/zthxxx/react-dev-inspector/compare/v1.5.2...v1.5.3) (2021-03-23)


### Bug Fixes

* fix example sites package-lock ([0540581](https://github.com/zthxxx/react-dev-inspector/commit/0540581dbaf43b1cddb047c8481338a2568fabc1))


### Features

* sideEffects false for tree-shaking ([#29](https://github.com/zthxxx/react-dev-inspector/issues/29)) ([8b54095](https://github.com/zthxxx/react-dev-inspector/commit/8b54095cc0f7a81d5907c48ff15aeb2c2753b5cc))
* add module field for better support of tree-shaking, close [#30](https://github.com/zthxxx/react-dev-inspector/issues/30)



## [1.5.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.5.0...v1.5.1) (2021-03-13)


### Bug Fixes

* fix querystring dependency, close [#26](https://github.com/zthxxx/react-dev-inspector/issues/26) ([46d94c0](https://github.com/zthxxx/react-dev-inspector/commit/46d94c06b7ce03e37635de1652733e00baf610ca))
* fix unit test fixture ([ce1b0f2](https://github.com/zthxxx/react-dev-inspector/commit/ce1b0f28c67d223d0ebd551518bc8e7e536d41cd))


### Features

* support vite, add vite demo and docs ([f5c120e](https://github.com/zthxxx/react-dev-inspector/commit/f5c120e982de3eaa6e9f825dcf3db3acfce0d850))



## [1.4.0](https://github.com/zthxxx/react-dev-inspector/compare/v1.3.6...v1.4.0) (2020-03-06)


### Features

* add inspector babel-plugin, add tests, adjust api docs ([7c4c9c9](https://github.com/zthxxx/react-dev-inspector/commit/7c4c9c957335762918855cc97037b937a1390deb))



## [1.3.6](https://github.com/zthxxx/react-dev-inspector/compare/v1.3.1...v1.3.6) (2020-03-07)


### Refactor

* optimize inspect interactive experience ([7aca0c28](https://github.com/zthxxx/react-dev-inspector/commit/7aca0c2829163987f5a51ffa32603d793db5c447))  relate to ([#20](https://github.com/zthxxx/react-dev-inspector/issues/20))



## [1.3.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.1.4...v1.3.1) (2021-03-05)


### Bug Fixes

* fix postinstall error ([390c302](https://github.com/zthxxx/react-dev-inspector/commit/390c3024c207ff6db2df248803e4167fe9fc1d47))
* fix inspector source dir with monorepo umi3 ([dec5713](https://github.com/zthxxx/react-dev-inspector/commit/dec571336575280b1594c688b5d1a1281e9bf57b))
* fix lerna correct lint in bootstrap ([46c1422](https://github.com/zthxxx/react-dev-inspector/commit/46c1422fe8ba9c2b21ce3a18c0fb4c6b9755a92a))


### Features

* do not need to config or use pwd in react runtime, v1.3.0 ([e85a030](https://github.com/zthxxx/react-dev-inspector/commit/e85a030efe008a379c75852b09674dbcb2497969)), closes [#21](https://github.com/zthxxx/react-dev-inspector/issues/21)

* add create-react-app example project, adjust umi example code ([e8ccaeb](https://github.com/zthxxx/react-dev-inspector/commit/e8ccaeb97bbbd511cb8e9579966108abcde90e41))
* add feature of jumping to the place of reference more humanized ([#15](https://github.com/zthxxx/react-dev-inspector/issues/15)) ([#20](https://github.com/zthxxx/react-dev-inspector/issues/20)) ([16d9aca](https://github.com/zthxxx/react-dev-inspector/commit/16d9aca41d367a285ae2192fe48c42e4c0ded635))



## [1.1.4](https://github.com/zthxxx/react-dev-inspector/compare/v1.1.3...v1.1.4) (2020-12-15)


### Bug Fixes

* fix loader relative path in monorepo like lerna, close [#12](https://github.com/zthxxx/react-dev-inspector/issues/12) [#9](https://github.com/zthxxx/react-dev-inspector/issues/9) ([c9d3c1e](https://github.com/zthxxx/react-dev-inspector/commit/c9d3c1e2c65b2c651406796e65ead8cb1bc3550e))

* compatible with internalInstanceKey in react v16.14, close [#10](https://github.com/zthxxx/react-dev-inspector/issues/10) ([87d58bc](https://github.com/zthxxx/react-dev-inspector/commit/87d58bce068928c2880e5c92989672235946a924))
* fix npm-run-all bin file in lock file ([dc097a6](https://github.com/zthxxx/react-dev-inspector/commit/dc097a6b7ab7e8020164bb76793b13f0b04f4b06))
* fix package-lock file with npm7 ([b3d39e1](https://github.com/zthxxx/react-dev-inspector/commit/b3d39e1d0e56caeba2b0748469a8a8f9af1f72f8))



## [1.1.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.0.0...v1.1.1) (2020-12-07)

First public release version, initialized project.


### Features

* add webpack plugin to inject launch IDE middleware in devServer ([ab205ab](https://github.com/zthxxx/react-dev-inspector/commit/ab205ab9b413ad8b4c7fb22eae335773ee179525))
* improve getFiberName ([6ea2d37](https://github.com/zthxxx/react-dev-inspector/commit/6ea2d377b6e38c12f923b56440b6ebc1b85af7a3))
* add react-dev-inspector demo website page ([6f6e546](https://github.com/zthxxx/react-dev-inspector/commit/6f6e546169fe1e29fe8b8c28e93c7551b2d649a2))
* add more inspector-config ([44b260f](https://github.com/zthxxx/react-dev-inspector/commit/44b260f1630b58890ba88c392e55464965ebfd5c))
* add element handler callback, refactor inspector plugins ([77c5ba7](https://github.com/zthxxx/react-dev-inspector/commit/77c5ba7ed4eed84a0d72ff8baf3f2441bdef76a9))
