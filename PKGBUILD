
pkgname=yacd-tauri
_pkgname=yacd
pkgver=1.0.2
pkgrel=1
pkgdesc="A Clash GUI based on tauri."
arch=('x86_64')
url="https://github.com/zzzgydi/clash-verge"
license=('GPL3')
depends=('libappindicator-gtk3' 'webkit2gtk' 'gtk3' 'libayatana-appindicator' 'openssl-1.1')
optdepends=('clash-meta: Another Clash Kernel')
source=("yet-another-clash-dashboard_1.0.2_amd64.deb")
sha512sums=('d3291c8e713c06d1978e781612a72ee6b770fbe804020af0f4b2d8c6145e5485e48f05fc08b52d79f128a021ac5d90c061fcd567a4200e2d9d02553176f4098f')

package() {
    tar xpf data.tar.gz -C ${pkgdir}
}
