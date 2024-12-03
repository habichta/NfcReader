import Foundation

@objc public class NfcReader: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
