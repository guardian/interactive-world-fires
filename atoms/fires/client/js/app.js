import * as d3 from 'd3'
import * as topojson from 'topojson'
import geoLand from 'world-atlas/land-50m.json'
import countriesGeo from 'world-atlas/countries-50m.json'

const countries = topojson.feature(countriesGeo, countriesGeo.objects.countries);

const timeSpan = d3.scaleLinear()
.domain([2000,2020])
.range([0,19])

var width = 680,
    height = 500,
    barbSize = 40;

var projection = d3.geoEquirectangular()
.fitExtent([[0, 0],[width, height]], countries)

const path = d3.geoPath().projection(projection)

var svg = d3.select('.interactive-wrapper')
.append('svg')
.attr('id', 'map_container')
.attr("viewBox", "0 0 " + width + " " + height )
.attr("preserveAspectRatio", "xMinYMax");

const appendImgs = (name) => {

		svg.append("image")
		.attr("clip-path", "url(#clip)")
		.attr("xlink:href", `<%= path %>/jpeg/${name}.jpeg`)
		.attr("width", width)
		.attr("height", height - 10)
		.attr('class', 'burned-img y' + name)
}

d3.utcYears(new Date(2000, 1, 1),new Date(2020, 1, 	1),1).map(d => appendImgs(d.getFullYear()))

const map = svg
.append('g')
.attr('class', 'map')
.selectAll('path')
.data(countries.features)
.enter()
.append('path')
.attr('d', path)
.attr('class', 'map-path')


let images = svg.selectAll('image')

let zero = 0;
let selected = zero;

var t = d3.timer(d => {
 
  if(zero >= 50){

  	images.nodes().map((d,i) => {

  		d3.select(d).classed('display', false)

	})

  	d3.select(images.nodes()[selected]).classed('display', true)

  	selected++

  	if(selected == images.nodes().length)selected = 0;

  	

  	zero = 0;
  }

   zero ++
  
}, 1);




    



	