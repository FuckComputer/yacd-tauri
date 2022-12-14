# yacd_meta_tauri

A GREAT program to fuck your Clash.

> Let everyone enjoy the fun of fucking 
>
> -- Chi_Tang

## 打包方式
确保您的电脑上存在以下软件包，最好为最新版本：
- yarn
- nodejs
- rust
然后执行打出 deb 包，并将 deb 包复制到项目目录下：
```bash
yarn
yarn tauri build
cp src-tauri/target/release/bundle/deb/yet-another-clash-dashboard_版本号_amd64.deb .
```
修改 `PKGBUILD` 中的 `source` 跟 `sha512sums` 使其匹配刚编译的 deb 包。
然后进行打包：
```bash
makepkg
```
