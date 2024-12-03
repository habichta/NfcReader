// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorNfcReader",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorNfcReader",
            targets: ["NfcReaderPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "NfcReaderPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NfcReaderPlugin"),
        .testTarget(
            name: "NfcReaderPluginTests",
            dependencies: ["NfcReaderPlugin"],
            path: "ios/Tests/NfcReaderPluginTests")
    ]
)