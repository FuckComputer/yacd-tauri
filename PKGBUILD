
pkgname=yacd-tauri
_pkgname=yacd
pkgver=1.0.1
pkgrel=1
pkgdesc="A Clash GUI based on tauri."
arch=('x86_64')
url="https://github.com/zzzgydi/clash-verge"
license=('GPL3')
depends=('libappindicator-gtk3' 'webkit2gtk' 'gtk3' 'libayatana-appindicator' 'openssl-1.1')
optdepends=('clash-meta: Another Clash Kernel')

source=("yet-another-clash-dashboard_1.0.1_amd64.deb")

sha512sums=('02303853699d213bbe97f15307fcb43431c207bfcae998393c552e3eacd9ea47e44877f959bf8566f29d9621aae10ee96969413c94bd2852d59cae39756a60ec')
package() {
    tar xpf data.tar.gz -C ${pkgdir}
}
