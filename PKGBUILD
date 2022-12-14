
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

sha512sums=('62145053e0563fd3b16d620ec77b8646acf86f471bd54aeffd16899d35a8924b757301847723bf2c89cbf27484bacf0649d606ea504bc791084bfae060fa0fd9')

package() {
    tar xpf data.tar.gz -C ${pkgdir}
}
