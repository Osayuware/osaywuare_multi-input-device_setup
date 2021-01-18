while True:
    if input.sound_level() > 5 :
        music.siren.play_until_done() 
        light.set_all(color.rgb(255,0,0))

