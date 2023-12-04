
puts "start the seeding"

Building.create({name: "Beaver Lake", code: 1033})
Building.create({name: "Repair", code: 1001})
Building.create({name: "Pine Lake", code: 1028})

x = 114000
20.times do |index| 
    Computer.create({
        asset_tag: x + index,  
        model: 3310, 
        building_id: rand(1..3), 
        serial_number: "ASX" + rand(100...999).to_s
    })
end

puts "seedings planted"