import { memo } from 'react';
import Card from './assets/components/Card';


const App = () => {
  const jobs = [
  {
    brandLogo: "data:image/webp;base64,UklGRgAFAABXRUJQVlA4IPQEAACwLQCdASqMAeYAPp1OpU0lpKOiIjPYSLATiWdu4XXQ5aP2P9XGYAP2SQc+z9Jy9nJ8h56m/V6KfFV6Znmn3LfqgKdn4ughuxeWuEl5CitHwOGjmPjraN6B6mjegepo3oHpIY1N5WyJR/rcrZEo/1uVsiUf63K2RKRIgOLkSj/W5WyJR/rcrZEiSvZpl/XJJW3cVK6ju1bmuD/rcrZEo/l+XxFymgOxOHRig21fpDBJQL6gTknpuRKP9blbIlDSTgcQW7D0c7ykMxiNehFKKJoJciUf63K2NLDgv8DMxgjLfrPXFx7+hvOttQdP+C5rOD/rcrZEoaMws4iwh6MfzsZVNUBjOgzhrV9J/aOJ1/fDYJciUf63K2Rh5ZBmGJt6brlcDe4+3xm/D3dKOrJdOW5WyJR/rtddH8UNUuAtOW5WyJR/rcrZEo/1uVsiUf63K2RKP9blbIlH+tytkSj/W5WyJSC8lBd0Iamy/JRXeinKuAi0mXwrQAD+/1upKhQjCApDqYh+piH6mIfqYh+piH6mIfqYh+piH6mIfqYh+piHtVaR23FBg7PEYLxxDgGWYAANHg3XesBGFF9dLgseeoT3McQnvCHeIIv8P6FphHdFb4RULhj5LOlnpTZ+W3EPBWQXVm8c/2C/fdJpvsYeqXuQi7tU59OSzT902mHCcVIewphgiohPaphrvyvyAAtsIwgWV5yr/34HWn+//8lkI8DbR3TJ3mUgAJpgGfTdkBDVo+8WVpXV1U8QRfma7yx9cbR+PFurSRrwRb02eY7ksAeQ8b7JFUxPd3DKtQCLKYkmXhqcjUpUHdXyQ7Je0NgNdKKfBmHP5PjDbGkDzZz38wkR9fuCe+BnzghCq33X1tgRORCuHhJlpqzj5pc5/yU0RVBt/G2sHoydpRLWd2O93mgyhJ2obwWW3L//m9IbDQh8taK6KX8Obn17QYWtzyKlmdGjzkokW3Erf6NpPHQuccyft+8e1d8F+fCDeFIWm5IljE774tAQbTmC9XhbW46A3Y5OGk3WhBqQgDzp9jsjsi/utkdPlk5jUYLJIKy8rQ95WqctaMbBFtefwubvOS9ErvcffXqIPSN4EmGrAjuScMyTv2FRiO27brou6L1QPpAT9Cfwr0JJo1jzlxDVFVZ0g7xbiDdBwC20MekuOke5mXNYaZ5qt6RFXNoanCOzzoZx5EgFzRCx2BW9BO6E55lKQ17kQYY4NCyeo1xVCrV1ENEUb2MDE4hq26vRzuRJZiEJH/aHHElZ2Jn/Du880Z0i4OxMFcNqCt0uS3OQqAa20qbeK9kE0WQmLV/3SEKzPGdr9shc70mz+k8iRT+ATGiAAjXWnDgXjfd55aT2KMubbaFpwgeWj1mq0uSzeFd/Ie1ZOAU8ccFz34eEkZFeLun2ex0dv12vOvh2sUaN/arUN4OylLLx4Diq0rR1AFViv1CMl6Hj2kY1/jvsvnUlMfbmy0kpN90uQb2NuZNcCHCxhVkHgkF1oZh1A3cM/05HXyxjy+ikI6l+L0jEIT+gO7Y2mtOtVsqshZqrbk3ZLqEgT5EgyyEyGING7f5vBSUiADHRyEeGuyDpW/HwSyNtz08GyJiQkPYA0taSJoLyE2zqk5Svqj9AtiAj0oaM/El0UFs3dD5RFD+UUkI/Fi6lFdTvKH584a+ARhQDRMBBFAc/vScAXMAAAA==",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo-teka.com/wp-content/uploads/2025/06/amazon-logo.png",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/netflix.png",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/meta.png",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/microsoft.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Tesla",
    datePosted: "10 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo-teka.com/wp-content/uploads/2025/11/uber-icon-logo.png",
    companyName: "Uber",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/airbnb.png",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/oracle.png",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$66/hr",
    location: "Bangalore, India"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card company={elem.companyName} post={elem.post}
        tag1={elem.tag1}  datePosted={elem.datePosted} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}
        />;


      })}
      

      
    </div>
  );
};

export default memo(App);