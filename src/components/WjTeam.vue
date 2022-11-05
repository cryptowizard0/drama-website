<template>
    <div class="wj-team">
        <div>
            <img src="../assets/img/ls/team.png" alt="">
        </div>
        <div class="wj-team_list">
            <div>
                <img src="../assets/img/personnel/1.jpg" alt="">
                <div>GOKU</div>
                <div>Artist</div>
            </div>
            <div>
                <img src="../assets/img/personnel/2.jpg" alt="">
                <div>JOHN</div>
                <div>Producer</div>
            </div>
            <div>
                <img src="../assets/img/personnel/3.jpg" alt="">
                <div>POTTER</div>
                <div>Photographer</div>
            </div>
            <div>
                <img src="../assets/img/personnel/4.jpg" alt="">
                <div>PERELMAN</div>
                <div>Janitor</div>
            </div>
        </div>
        <div class="wj-team-line"></div>
        <div class="wj-team-img"> <img src="../assets/img/ls/img.png" alt=""></div>
    </div>
</template>
<script>
export default {
    name: 'WjTeam',
    components: {},
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.wj-team {
    margin: 20px 25px 10px 25px;
    background-color: rgb(238, 148, 130);

    >:nth-child(1) {
        width: 80%;
        margin: 0 auto;
        padding-top: 100px;

        img {
            width: 100%;
            height: 500px;
            object-fit: cover;
        }
    }

    .wj-team_list {
        width: 80%;
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        font-size: 30px;
        color: #fff;
        margin-bottom: 85px;

        img {
            width: 300px;
            margin-bottom: 50px;
        }

        div {
            >:nth-child(2) {
                font-size: 40px;
                font-weight: bold;
            }

            >:nth-child(3) {
                font-size: 34px;
                font-weight: bold;
            }
        }
    }

    .wj-team-line {
        height: 20px;
        width: 100%;
        background-color: #88c5f9;
        border-radius: 10px;
    }

    .wj-team-img {
        width: 100%;

        img {
            width: 80%;
            max-width: 1700px;
            height: 1000px;
            object-fit: cover;
        }
    }
}
</style>
  