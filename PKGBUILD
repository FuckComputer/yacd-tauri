
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

source=("yacd_0.0.0_amd64.deb")

sha512sums=('1a3b44b684d7a09af9459f37b92ac5e1536830c8dd15d927890d966b8402049c6b3cd604cf8486bb9d110b10734dbdd18bd51fd4240b2fd66134bbcb045653bc')

package() {
    tar xpf data.tar.gz -C ${pkgdir}
}