//
//  Instahood_2App.swift
//  Shared
//
//  Created by Morgan Bairamkulow on 19.02.2022.
//

import SwiftUI

@main
struct Instahood_2App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
