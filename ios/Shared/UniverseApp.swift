//
//  UniverseApp.swift
//  Shared
//
//  Created by Morgan Bairamkulow on 19.02.2022.
//

import SwiftUI

@available(iOS 14.0, *)
@main
struct UniverseApp: App {
    let persistenceController = PersistenceController.shared
  @available(iOS 14.0, *)
  
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
