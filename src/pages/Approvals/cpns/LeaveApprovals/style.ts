import styled from 'styled-components'

const ApprovalBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  h2{
    font-weight: 700;
    margin-bottom: 20px;
  }

  .userinfo{
    display: flex;

    img{
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }

    .userinfo_right{
      h5{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      
      p:last-child{
        margin: 0;
      }
    }
  }

  .detail{
    padding-left: 110px;
    margin: 0;

    li{
      margin-bottom: 20px;

      p{
        color: #999;
        margin: 0;

        span{
          color: #000;
          margin-left: 10px;
        }
      }
    }
  }

  .timeline-clock-icon {
    font-size: 16px;
  }

  [data-theme='compact'] .timeline-clock-icon {
    font-size: 14px;
  }

  .timeline{
    display: flex;

    h5{
      width: 80px;
      margin: 0;
    }

    p{
      margin: 0;
    }
  }

  .ant-card-body{
    height: 100%;

    .ant-timeline-item{
      padding-bottom: 150px;
    }
  }
    /* .ant-timeline{
      height: 100%;
    } */
`

export default ApprovalBox