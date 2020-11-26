
for i in /Users/pablo_gutierrez/Documents/guardian/20200914\ world\ fires/Guardian/GlobalLatLon/allfiles/*.tif; do
	gdalwarp -overwrite $i $i_reduced.tif -ts 2000 1000 $i; done