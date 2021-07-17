import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Header, Button, Pagination, Dropdown } from 'semantic-ui-react'
import JobAdvertisementService from '../Services/jobAdvertisementService';
import FavoriteJobAdService from '../Services/favoriteJobAdService';
import JobAdFilter from './JobAdFilter';


export default function JobAdvertisements() {

  const [jobAdvertisements, setJobAdvertisements] = useState([null]);

  const [favJobAdvertisements, setfavJobAdvertisements] = useState([]);

  const [filter, setFilter] = useState({})

  let [activePage, setActivePage] = useState(1);

  let [pageSize, setPageSize] = useState(10);

  const [totalPages, setTotalPages] = useState(0)



  
  useEffect(()=>{

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAllJobAdPageNumberAndPageSizeAndFilter(activePage, pageSize,filter)
    .then((result)=> {
    setJobAdvertisements(result.data.data)
    setTotalPages(parseInt(result.data.message));
    
    })
  },[activePage,pageSize,filter])
  
  
  
  useEffect(()=>{

    let favoriteJobAdService = new FavoriteJobAdService();
    favoriteJobAdService.getByCandidateId(44).then(result=>setfavJobAdvertisements(result.data.data))
    
  },[])
  
 
  

  const addFavoriteJobAd = (jobAdId) => {  

    let favoriteJobAdService = new FavoriteJobAdService();
    favoriteJobAdService.addFavoriteJobAd({jobAdId, id: 44})
  }
 
  function isFavorited (id){

    return favJobAdvertisements.some((t)=> t.jobAd.jobAdId === id)
  }
  function handleFavClick(id){

    if(isFavorited(id)){

// console.log("Silme")
    }
    else{
      addFavoriteJobAd(id)
    }
  }
  const paginationOptions = [
    { key:1, text: "1 İlan", value: 1 },
    { key:2, text: "2 İlan", value: 2 },
    { key:10, text: "10 İlan", value: 10 },
    { key:25, text: "25 İlan", value: 25 },
    { key:50, text: "50 İlan", value: 50 },
    { key:100, text: "100 İlan", value: 100 },
  ];

const handleOnFilter = (filter) => {

  if(filter.cityId.length === 0){
    filter.cityId = null;
  }
  if(filter.jobId.length === 0){
    filter.jobId = null;
  }
  if(filter.jobAdWorkingStyleId.length === 0){
    filter.jobAdWorkingStyleId = null;
  }
  if(filter.jobAdShiftId.length === 0){
    filter.jobAdShiftId = null;
  }
 
  setFilter(filter);
  setActivePage(1)
};

const handlePagination = ( e, { activePage }) => {
  setActivePage(activePage);
};

const handlePaginationSize = (value) => {
  setPageSize(value);
  
}


  return (
    <div>

  

<JobAdFilter handleOnFilter={handleOnFilter}/>

 
  
<Header as='h3' textAlign='left'>
      İş İlanları
    </Header>

      <Table celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Başvuru Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements?.map(jobAdvertisement =>(
            <Table.Row>

              <Table.Cell>{jobAdvertisement?.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement?.jobPosition.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisement?.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement?.jobAdMaxOpenPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement?.jobAdApplicationEnd}</Table.Cell>
              <Table.Cell><Button> Detaylar </Button></Table.Cell>
              <Table.Cell><Button onClick={()=> handleFavClick(jobAdvertisement?.jobAdId)} >{isFavorited(jobAdvertisement?.jobAdId)? "Çıkar":"Ekle" }</Button></Table.Cell>

            </Table.Row>
          ))
         }

    </Table.Body>

        
      </Table>
      <div>
        <Pagination
        
        firstItem={null}
        lastItem={null}
        activePage={activePage}
        onPageChange={handlePagination}
        totalPages={totalPages}
        >

        </Pagination>

        <Dropdown
          onChange={(e, data) => {
          setActivePage(1)
          setPageSize(data.value);
          handlePaginationSize(data.value)
          console.log(filter)

          }}
          selection
          defaultValue={pageSize}
          text={"Sayfala => " + pageSize}
          options={paginationOptions}
        />
      </div>
    </div>
  )
}
