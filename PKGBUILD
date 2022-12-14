
pkgname=yacd-tauri
_pkgname=yacd
pkgver=1.0.0
pkgrel=0
pkgdesc="A Clash GUI based on tauri."
arch=('x86_64')
url="https://github.com/zzzgydi/clash-verge"
license=('GPL3')
depends=('libappindicator-gtk3' 'webkit2gtk' 'gtk3' 'libayatana-appindicator' 'openssl-1.1')
optdepends=('clash-meta: Another Clash Kernel')

source=("yet-another-clash-dashboard_1.0.0_amd64.deb")

sha512sums=('48238f154dcecf7b360352a78f0faa7eba6ccfeec71427b8ee0123482c5ba18846f8fcda1c95e31e87a7956c1831bfa80b0d39af66a5c7b6b1154d4e4e54da50')

package() {
    tar xpf data.tar.gz -C ${pkgdir}
}
