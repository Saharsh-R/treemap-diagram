import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import * as d3 from 'd3';
import d3Tip from "d3-tip";
import { useEffect, useState,useRef } from 'react';
import { Grid } from '@material-ui/core';
import {legendColor} from 'd3-svg-legend';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link  target="_blank" href="https://saharsh-r.github.io/">
        Saharsh Rathi
      </Link>{' at '}
      {new Date().toUTCString()}
      {'.'}
    </Typography>
  );
}


function BarChart({ id, data, width = 1200, height = 570 }) {
  var distance = 130
  var treemap = data => d3.treemap()
    .size([width - distance, height])
    .padding(1)
  (d3.hierarchy(data)
      .eachBefore(function (d) {
        // dfs manner. from (top 100) -> (Xbox) -> (all the games of xbox)
        //not required though to pass the tests of fcc but still nice to know
        // only the top 'top 100 games' does not have a parent.
        d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name;
      })
      .sum(d => {
        // uncomment the following line to see how the sum is taking place. From leaf to root. 2600 game, 2600, wii games, wii ...
        // console.log(d.value) ; 
        return d.value
      })
      .sort((a, b) => b.value - a.value));

  // another way of implementing this is given in this link https://codepen.io/freeCodeCamp/pen/KaNGNR?editors=1010 It declares the root and something different.

  // uncomment the following lines to see all the height 0 and depth 2 nodes of all the games. 
  // console.log(root.leaves()) 
      
  useEffect(() => {
    console.log('updating')
  const root = treemap(data) ;

    const z = d3.schemePaired
    var myColor = d3.scaleOrdinal(z)

    const svg = d3
      .select('#tree-map-diagram')
     

    // legend stuff

    // const categories = data.children.map(c => c.name) // not sorted according to area

    const allNodeCategory = root.leaves().map(n => n.data.category)
    const categories = []
    const store = new Set()
    allNodeCategory.forEach(x => {if (!store.has(x)){categories.push(x); store.add(x)}})

    const categoryColors = categories.map(c => myColor(c))

    var ordinal = d3.scaleOrdinal()
      .domain(categories)
      .range(categoryColors);
    
    
    svg.append("g")
      .attr('id', 'legend')
      .attr("class", "legendOrdinal")
      .attr("transform", `translate(${width - distance + 20},20)`);
    
    var legendOrdinal = legendColor()
      //d3 symbol creates a path-string, for example
      //"M0,-8.059274488676564L9.306048591020996,
      //8.059274488676564 -9.306048591020996,8.059274488676564Z"
      .shape("rect", d3.symbol().type(d3.symbolSquare).size(150)())
      .shapePadding(10)
      //use cellFilter to hide the "e" cell
      .scale(ordinal);
    
    svg.select(".legendOrdinal")
      .call(legendOrdinal)
      .selectAll('rect')
      .attr('class', 'legend-item')
      ;
    // legend stuff end

    // tooltip
    var tip = d3Tip()
      .attr('class', 'd3-tip')
      .attr('id', 'tooltip')
      .offset([-10, 0])
      .html(function(d) {
        return d;
      });
    var cell = svg
      .selectAll('whythisnotg') //if this is 'g' it does not work. IDK why.
      .data(root.leaves())
      .enter()
      .append('g')
      .attr('class', 'group')
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    cell
      .append('rect')
      .attr('id', d => {
        // here d is a Node. The data of json is present in d.data. Uncomment this to understand
        //console.log(d)
        return d.data.id // the big thing we did before which was not necessary.
      })
      .attr('class', 'tile')
      .attr('height', d => d.y1 - d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('data-name', d => d.data.name)
      .attr('data-category', d => d.data.category)
      .attr('data-value', d => d.value) // d.data.value also works, but it is already present in the node form itself
      .attr('fill', d =>  myColor(d.data.category))
      .on('mouseover', function(e, d) {
        // has to be in this way. (e, d) => {} will not work.
          tip.attr('data-value', d.value);
          var str = 
          `<span style='color:#FE621D'>Name: </span>${d.data.name}</br>` + 
          `<span style='color:#FE621D'>Category: </span>${d.data.category}</br>` +
          `<span style='color:#FE621D'>Value: </span>${d.value}` 
          ;
          tip.show(str, this); 
          d3.select(e.currentTarget).style("fill", 'white');
        })
      .on('mouseout', function(e, d) {
          d3.select(e.currentTarget).style("fill",  myColor(d.data.category));
         tip.hide(this); 
        });
    
    cell.append("text")
      .selectAll("fgsdfg")
      .attr('class', 'tile-text')
      .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat((d.value)))
      .enter()
      .append("tspan")
      .attr("x", 2)
      .attr("y", (d, i) =>{
        // console.log(d, i, 13 + i * 10); 
        // output in this way
        /*
Super  1 23
Mario  2 33
Bros.  3 43
Wii 4 53
28.32 5 63
        */  
        return 8 + i * 8
      })
      // .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
      .text(d => d)
      .attr('class', 'tile-text');
    
    svg.call(tip);
  
  }, []);
  

  return <div id={id} style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <svg id={'tree-map-diagram'} width={width} height={height}> </svg>
  </div>;
}

export default function App() {
  
  const [dataset, setDataset] = useState([])
  const [title, setTitle] = useState('Video Game Sales')
  const [url, setUrl] = useState('')
  
  useEffect(() => {
    if (url == ''){
      fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json")
        .then(response => response.json())
        .then(data => {
          setDataset(data);
          })
    } else{
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setDataset(data);
          })
        console.log('updated')
    }
  }, [ url])
  const treeDiagram = BarChart({data: dataset})
  return (
    <Grid container alignItems = 'center' justify = 'center'  style = {{backgroundImage: 'radial-gradient( grey, #414141, #000000)'}}>
      <Grid item >
        <Box  boxShadow={24} p={2} style={{backgroundColor: 'white'}} borderRadius={40}>
          <Typography variant="h4" component="h1" align = 'center' id='title' gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" component="h2" id='description' align = 'center' gutterBottom>
            Here is the Treemap about the {title} grouped by their respective categories.
          </Typography>
          {dataset.length != 0 && 
            <BarChart id="barchart" data={dataset} />
          }
          <Box m={1}>
          <Grid container justify = "center">
            <ButtonGroup size="large" variant="contained" aria-label="contained primary button group">
              <Button onClick={() => {setTitle('Kickstarter Pledges'); setUrl('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json')}}>Kickstarter Pledges</Button>
              <Button onClick={() => {setTitle('Movie Sales'); setUrl('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json')}}>Movie Sales</Button>
              <Button onClick={() => {setTitle('Video Game Sales'); setUrl('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')}}>Video Game Sales</Button>
            </ButtonGroup>

          </Grid>
          
          </Box>
         
          <Copyright />
        </Box>
      </Grid>
    </Grid>
    
  );
}