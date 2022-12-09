# Changelog


## [1.8.4](https://github.com/zthxxx/react-dev-inspector/compare/v1.8.1...v1.8.4) (2022-12-09)

### revert

* revert v1.8.3 / v1.8.2 due to umi3/umi4 build TypeError


## [1.8.3](https://github.com/zthxxx/react-dev-inspector/compare/v1.8.2...v1.8.3) `Deprecated` (2022-12-08)

### feat

* compatible with `umi3`/`umi4` `addBeforeMiddlewares`/`addBeforeMiddewares` plugin api ([99ff088](https://github.com/zthxxx/react-dev-inspector/commit/99ff088ec6b461135c07c276dba07090c6bb74b7))


## [1.8.2](https://github.com/zthxxx/react-dev-inspector/compare/v1.8.1...v1.8.2) `Deprecated` (2022-10-17)

### feat

* compatible with `umi4` plugin api ([8a504d8](https://github.com/zthxxx/react-dev-inspector/commit/8a504d8e723c3d75aa6f553e73ac1f7023f0e9c9))

## [1.8.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.8.0...v1.8.1) (2021-06-15)

### fix

* `@babel/types` should be listed in dependencies instead of devDependencies, close #127 ([4aa7072](https://github.com/zthxxx/react-dev-inspector/commit/4aa7072036aaa6a5de53b51636d7bfaea41a8b88))

### docs

* add docs for VSCode only, simple without any other configuration ([884d576](https://github.com/zthxxx/react-dev-inspector/commit/884d576a2f04dee98455ae5d16c748c963d38780))

### chore

* update all non-major dependencies


## [1.8.0](https://github.com/zthxxx/react-dev-inspector/compare/v1.7.1...v1.8.0) (2021-04-18)


### feat

* update `ReactInspectorPlugin` for compatible with `webpack` v5 and v4 ([914b12c](https://github.com/zthxxx/react-dev-inspector/commit/914b12c74bce2141fdabbea73c1c7b79e276e414))

### docs

* update docs for use with `create-react-app` v5, `webpack` v5 and `webpack-dev-server` v4 ([914b12c](https://github.com/zthxxx/react-dev-inspector/commit/914b12c74bce2141fdabbea73c1c7b79e276e414))

### chore

* upgrade `create-react-app` to v5 and update example project config file ([914b12c](https://github.com/zthxxx/react-dev-inspector/commit/914b12c74bce2141fdabbea73c1c7b79e276e414))
* upgrade `vite` and `@vitejs/plugin-react`, update example project config file ([914b12c](https://github.com/zthxxx/react-dev-inspector/commit/914b12c74bce2141fdabbea73c1c7b79e276e414))



## [1.7.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.7.0...v1.7.1) (2021-11-02)


### feat

* inspect element immediately at mouse point while press hotkey ([06b57fb](https://github.com/zthxxx/react-dev-inspector/commit/06b57fb29bf5fa872c3a958e32d799b734bb0fc0))



## [1.7.0](https://github.com/zthxxx/react-dev-inspector/compare/v1.6.0...v1.7.0) (2021-08-16)

### feat

* support for Next.js, add example project and docs ([c7f52ba](https://github.com/zthxxx/react-dev-inspector/commit/c7f52bac8e6ec8cd7f56f12d1035090bb7ced3e5)), close [#98](https://github.com/zthxxx/react-dev-inspector/issues/98)

### chore

* upgrade many dependencies version by renovate bot
* enhance ts types for tsc build ([b8b8375](https://github.com/zthxxx/react-dev-inspector/commit/b8b837545373e35c075e7b2d804f9614eef9f24f))
* refactor build scripts, add commonjs output for ssr like Next.js ([e2d4d8d](https://github.com/zthxxx/react-dev-inspector/commit/e2d4d8d7a06c8d03fbfc3b355dfefd79d02c17e0))
* rename sites to examples ([407ff76](https://github.com/zthxxx/react-dev-inspector/commit/407ff764118c183b001f0f44ac20fbf5b2b21c0f))
* update config of jest / npm / ts ([a40f9b8](https://github.com/zthxxx/react-dev-inspector/commit/a40f9b812c6b8c8ab348709f490286c34b701895))
* upgrade lockFileVersion to v2 ([a45873b](https://github.com/zthxxx/react-dev-inspector/commit/a45873b8289ee2964b794400e2e06d5aecd5471d))

### docs

* add docs for changelog ([fe1206b](https://github.com/zthxxx/react-dev-inspector/commit/fe1206b608d1b789315c71ed53f915077868d9f9)), close [#25](https://github.com/zthxxx/react-dev-inspector/issues/25)
* update comments of inspect reference fiber rule ([fb74698](https://github.com/zthxxx/react-dev-inspector/commit/fb74698eaa41a6c6dab84d4ec448b0b7e1f79028))



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

* do not need to config or use pwd in react runtime, v1.3.0 ([e85a030](https://github.com/zthxxx/react-dev-inspector/commit/e85a030efe008a379c75852b09674dbcb2497969)), close [#21](https://github.com/zthxxx/react-dev-inspector/issues/21)
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
