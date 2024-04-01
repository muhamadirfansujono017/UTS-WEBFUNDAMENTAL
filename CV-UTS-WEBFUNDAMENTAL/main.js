<script>
  function navigation(id) 
    profile = document.getElementById('Profile');
    education = document.getElementById('Education');
    experience = document.getElementById('Experience');
    Skills = document.getElementById('Skills');
    Language = document.getElementById('Language');
    Social Media = document.getElementById('Social Media');

    switch (id) 
      case 'profile':
        profile.style.display = 'block';
        education.style.display = 'none';
        experience.style.display = 'none';
        hobby.style.display = 'none';
        break;
      case 'edu':
        education.style.display = 'block';
        profile.style.display = 'none';
        experience.style.display = 'none';
        hobby.style.display = 'none';
        break;
      case 'exp':
        experience.style.display = 'block';
        education.style.display = 'none';
        profile.style.display = 'none';
        hobby.style.display = 'none';
        break;
        case 'skil':
        experience.style.display = 'block';
        education.style.display = 'none';
        profile.style.display = 'none';
        hobby.style.display = 'none';
        break;
        case 'langue':
        experience.style.display = 'block';
        education.style.display = 'none';
        profile.style.display = 'none';
        hobby.style.display = 'none';
        break;
        case 'socmed':
        experience.style.display = 'block';
        education.style.display = 'none';
        profile.style.display = 'none';
        hobby.style.display = 'none';
        break;
      default:
        hobby.style.display = 'block';
        education.style.display = 'none';
        experience.style.display = 'none';
        profile.style.display = 'none';
</script>