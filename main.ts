while (true) {
    if (input.soundLevel() > 5) {
        music.siren.playUntilDone()
        light.setAll(color.rgb(255, 0, 0))
    }
    
}
